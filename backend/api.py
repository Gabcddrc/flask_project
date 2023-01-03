import time
import requests

from flask import Flask



app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/meme')
def get_random_meme():
    url = "https://meme-api.com/gimme/1"
    response = requests.request("GET", url)
    
    meme = response.json()["memes"][0]
    url = meme['url']
    title = meme['title']
    subreddit = meme['subreddit']
    

    return {'meme_url': url, "meme_title": title, "meme_subreddit": subreddit}