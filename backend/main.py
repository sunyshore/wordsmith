from fastapi import FastAPI
import requests
from bs4 import BeautifulSoup

# pronunciation
# noun/adjective/verb
# definition
# top 5 synoyms antonyms

app = FastAPI()



@app.get("/")
async def root(word : str):
    return {"message": await read_word(word)}

# pronunciation
# noun/adjective/verb
# definition
# top 3 synoyms antonyms

def get_soup(word):
    try:
        link = "http://www.dictionary.com/browse/"+ word
        page = requests.get(link) #gets the raw html from a link
        soup = BeautifulSoup(page.content, "html.parser") #a beautifulsoup object that takes the html content as input, html.parser is the type of of parser 
        return soup
    except:
        return("Coud not find: "+word)


def read_pron(soup):
    try:
        return soup.find("span", class_ = "pron-spell-content css-7iphl0 evh0tcl1").text #Pronunciation
    except:
        return("Could not find a pronunciation.")

def read_def(soup):
    try:
        definitions = [] # Words will have multiple definitions
        def_results = soup.find("div", class_ = "css-10n3ydx e1hk9ate0")
        def_section = def_results.find_all("div")
        count = 1
        for d in def_section:
            #definitions.append(str(count) + d.text)
            definitions.append(str(count) +". " + d.text)
            count = count+1
        return definitions
    except:
        return("Could not find any definitions.")

def read_synonyms(soup):
    try:
        synonyms = []
        syn_results = soup.find("div", id = "synonyms")
        syns = syn_results.find_all("a", class_ = "luna-xref")
        for s in syns:
            synonyms.append(s.text)
        return synonyms
    except:
        return("Could not find any synonyms.")

def read_antonyms(soup):
    try:
        antonyms = []
        ant_results = soup.find("div", id = "antonyms")
        ants = ant_results.find_all("a", class_ = "luna-xref")
        for a in ants:
            antonyms.append(a.text)
        return antonyms
    except:
        return("Could not find any antonyms.")
   
async def read_word(word : str):
    info = [] #all the information we need
    soup = get_soup(word)
    pron = read_pron(soup)
    defs = read_def(soup)
    syns = read_synonyms(soup)
    ants = read_antonyms(soup)
    info.append(pron)
    info.append(defs)
    info.append(syns)
    info.append(ants)
    return info