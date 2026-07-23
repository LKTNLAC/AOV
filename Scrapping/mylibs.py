import requests
import json
import csv


def download_image(source, filename):
    with open(filename, 'wb') as f:
        image_content = requests.get(source).content
        f.write(image_content)
        return True
        

def write_txt(filename, data):
    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(data)
    return True


def read_txt(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        data = f.readlines()
    return data


def write_json(filename, data):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
    return True


def read_json(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data


def write_csv(filename, data):
    with open(filename, 'w', encoding='utf-8', newline='') as f:
        csv_writer = csv.writer(f)
        for row in data:
            csv_writer.writerow(row)
    return True


def read_csv(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        title = next(reader)
        data = [row for row in reader]
    return title, data
    