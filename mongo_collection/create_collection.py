import csv

from pymongo import MongoClient
from tqdm import tqdm

# connects to local mongo client
mongo_client = MongoClient()
db = mongo_client["wordnet"]
collection = db["translations"]

csv_file = open("./gaps_translation.csv", "r")
reader = csv.DictReader(csv_file)
header = [
    "PWN",
    "ILI",
    "POS",
    "Tree File",
    "Gap",
    "Lemmas",
    "Translated Wordnet Gloss",
    "Gloss",
    "Hypernyms",
    "Hyponyms",
]
pos_mapping = {'n': 'noun', 'v': 'verb', 'a': 'adjective', 'r': 'adverb'}

for each in tqdm(reader, total=611):
    record = {}
    translations = [each['DeepL Direct'], each['DeepL Contextualized']]
    translations.extend(each['Translated Wordnet'].split(', '))
    translations = map(str.lower, translations)
    translations = list(filter(None, [word.rstrip('.') for word in translations]))
    translations = list(dict.fromkeys(translations))
    translations = [{'translation': item} for item in translations]
    for field in header:
        record[field] = each[field]
    record['POS'] = pos_mapping.get(record['POS'], record['POS'])
    record['Status'] = 'candidate'
    record['Translations'] = translations
    record['Translated_Gloss'] = record.pop('Translated Wordnet Gloss')
    record['Tree_File'] = record.pop('Tree File')
    collection.insert_one(record)
