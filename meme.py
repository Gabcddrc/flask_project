from flask import Flask, render_template
import requests
import json
from PIL import Image
import urllib.request

def get_meme():
    url = "https://meme-api.com/gimme/1"

    # querystring = {"top":"Top Text","bottom":"Bottom Text","meme":"Condescending-Wonka","font_size":"50","font":"Impact"}

    # headers = {
    #     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    #     "X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com"
    # }

    response = requests.request("GET", url)

    url = response.json()["memes"][0]['url']
    with urllib.request.urlopen(url) as url:
        with open('meme.jpg', 'wb') as f:
            f.write(url.read())
    image = Image.open('meme.jpg')
    image.show()

get_meme()