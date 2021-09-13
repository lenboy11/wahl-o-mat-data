## This does not work, unfortunately!

# Using tabula-py and tabulate to extract table from pdf-file
from tabula import io
from tabulate import tabulate

# source of pdf-file
pdfsrc = "https://www.wahl-o-mat.de/bundestagswahl2021/PositionsVergleichBundestagswahl2021.pdf"  
# alternatively download it: pdfsrc = "PositionsVergleichBundestagswahl2021.pdf"
#reads table from pdf file
try:
    df = io.read_pdf( pdfsrc, pages="all") #address of pdf file
except Exception as e:
    print("Error loading pdf:")
    raise e

# Empty List --> cannot read this PDF
print(tabulate(df))