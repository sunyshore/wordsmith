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
    return {"message": await read_phrase(word)}

async def read_phrase(word : str):

    final_info = []    

    link = "https://www.dictionary.com/browse/" + word
    page = requests.get(link) #gets the raw html from a link

    soup = BeautifulSoup(page.content, "html.parser") #a beautifulsoup object that takes the html content as input, html.parser is the type of of parser 

    pron = soup.find("span", class_ = "pron-spell-content css-7iphl0 evh0tcl1").text #Pronunciation
    w_type = soup.find("span", class_ = "luna-pos").text #Type (noun, verb, adjv, etc)

    definitions = [] # Words will have multiple definitions

    def_results = soup.find("div", class_ = "css-10n3ydx e1hk9ate0")
    
    def_section = def_results.find_all("div")
    count = 1
    for d in def_section:
        #definitions.append(str(count) + d.text)
        definitions.append(str(count) +". " + d.text)
        count = count+1
    
    final_info.append(w_type)
    final_info.append(pron)
    final_info.append(definitions)
    
    return final_info

    #body_results = soup.find(id= class_ = "css-109x55k e1hk9ate4"