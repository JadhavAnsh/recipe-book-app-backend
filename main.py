import requests
import datetime
import os

backendUrl=os.getenv("BACKEND_URL")

def ping_backend():
    url = backendUrl
    
    try:
        print(f"{datetime.datetime.now()}: Pinging {url}")
        response = requests.get(url, timeout=30)
        print(f"Response: {response.status_code}")
        
        if response.status_code == 200:
            print("Backend is alive")
        else:
            print(f"⚠️ Unexpected status code: {response.status_code}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    ping_backend()