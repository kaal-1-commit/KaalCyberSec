import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# CONFIG
keyword = "kaalcybersec Best cyberSecurity company"   # <-- apna keyword yaha daal
target_url = "https://kaal-1-commit.github.io/KaalCyberSec/"   # <-- apna link yaha daal
delay = 5

driver = webdriver.Chrome()

def search_and_click():
    driver.get("https://www.google.com")
    time.sleep(2)

    search_box = driver.find_element(By.NAME, "q")
    search_box.clear()
    search_box.send_keys(keyword)
    search_box.send_keys(Keys.RETURN)

    time.sleep(3)

    found = False

    # Scroll + find link
    for _ in range(5):  # max scroll attempts
        links = driver.find_elements(By.XPATH, "//a[@href]")

        for link in links:
            href = link.get_attribute("href")
            if href and target_url in href:
                print("✅ Found target link:", href)
                link.click()
                found = True
                time.sleep(5)
                return True

        # scroll down
        driver.execute_script("window.scrollBy(0, 800);")
        time.sleep(2)

    return False


while True:
    try:
        result = search_and_click()

        if not result:
            print("❌ Target link not found in results")

        time.sleep(delay)

    except Exception as e:
        print("Error:", e)
        time.sleep(delay)