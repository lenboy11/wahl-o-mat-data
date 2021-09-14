import pandas as pd 
import numpy as np
import json
import networkx as nx

## parteien.json
# WOMT_aParteien[index][0][0] = Partei Name
# WOMT_aParteien[index][0][1] = Partei Kürzel
## thesen.json
# WOMT_aThesen[i][0][0] = These Thema
# WOMT_aThesen[i][0][1] = These These
## parteienThesen.json
# WOMT_aThesenParteien[j][i] in {-1, 0, 1} ist Meinung der Partei i zu These j

# On how to fetch this data:
# All data is contained in the JavaScript-File "https://www.wahl-o-mat.de/bundestagswahl2021/app/definitionen/module_definition.js" --> module_definition.js
# Look for relevant Data -> JavaScript Array -> Json                     -> Clean Up                     -> import to python
#                        console.log(JSON.stringify(...))   |    Substitute \&quot; with "" or nothing  |     See below

# Import json-data
with open("json/parteien.json", encoding='utf-8') as f:
    parties = json.load(f)
with open("json/thesen.json", encoding='utf-8') as f:
    theses = json.load(f)
with open("json/parteienThesen.json", encoding='utf-8') as f:
    partiesOpinion = json.load(f)

# Due to the structure of partiesOpinion we consider the name of the parties as columns

partyList = []
for l in parties:
    partyList.append(l[0][1].rstrip().lstrip())

thesesList = []
for l in theses:
    thesesList.append(l[0][0])

df = pd.DataFrame( partiesOpinion, index = thesesList, columns = partyList )
# This Dataframe gives a great overview of the table

res = np.zeros((len(parties), len(parties)), dtype= np.int32)
for c in range(len(partiesOpinion)):
    for i in range(len(partiesOpinion[c])-1):
        for j in range(i+1, len(partiesOpinion[c])):
            res[i][j] += 1 - abs(partiesOpinion[c][i] - partiesOpinion[c][j])/2

# Shows the relationship between to parties (upper-right triangular matrix)    
dfRes = pd.DataFrame(res, partyList, partyList, dtype= np.int32)

lineWidthList = []
nodeSizeList = []
G = nx.Graph()
i = 0
for party in partyList:
    i += 1
    G.add_node(party)
    nodeSizeList.append(max(50, 700 - 20*i))
for i in range(len(res)-1):
    for j in range(i+1, len(res)):
        G.add_edge( partyList[i], partyList[j], weight=3*res[i][j] )
        lineWidthList.append(0.05 + 0.02*res[i][j])

pre_pos = {partyList[2]: (1,0.5), partyList[4]: (0,0.5)}
pos = nx.spring_layout(G, k=0.25, iterations=100, pos=pre_pos)  # positions for all nodes

nx.draw_networkx_nodes(G, pos, node_size=nodeSizeList)
nx.draw_networkx_labels(G, pos, font_size=12, font_family='sans-serif')
nx.draw_networkx_edges(G, pos, width=lineWidthList)