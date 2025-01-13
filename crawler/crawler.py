import requests
from bs4 import BeautifulSoup

URL = "https://example.com"
response = requests.get(URL)
soup = BeautifulSoup(response.content, "html.parser")

data = []
for item in soup.find_all("h2"):
    title = item.text.strip()
    data.append({"title": title})

with open("data.json", "w") as file:
    import json
    json.dump(data, file)

print("Data saved to data.json")
