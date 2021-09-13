import pandas as pd 
import numpy as np
import json

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
with open("json/parteien.json") as f:
    parties = json.load(f)
with open("json/thesen.json") as f:
    theses = json.load(f)
with open("json/parteienThesen.json") as f:
    partiesOpinion = json.load(f)

# Due to the structure of partiesOpinion we consider the name of the parties as columns
columns = []
for l in parties:
    columns.append(l[0][1])
index = range(len(parties))

df = pd.DataFrame( partiesOpinion, index = index, columns = columns )