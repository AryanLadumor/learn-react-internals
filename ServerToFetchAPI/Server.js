import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import puppeteer from "puppeteer"



const app = express();

// Allow requests from your React app
app.use(cors());

const PORT = 5000;

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9894468&lng=72.4917066&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          __fetch_req__: "true",
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "if-none-match": 'W/"1f552-C/ElprwvYUkR8R7O2t04DjqzjP4"',
          platform: "dweb",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "user-id": "222900317",
          cookie:
            "__SW=x-e9T-xzMeq5qodmM_1xcZcebIoa2GtY; _device_id=b8d563b1-692b-f6de-3929-402d86594623; fontsLoaded=1; _gcl_au=1.1.727592449.1771677067; _session_tid=cee0019f895bf7d336289b795b6858f6e3123dc16aea4baa2df945fa328446206effff97f3931669868c51c2889587d61500e4b1422bf9446662bc2c5dd140efcebd7d95a1417a6f67907e0aa8e02c66c9e3740a10fb325a558ff7c4f3f9d13d019585fa1a6e93c33d55bf32ccfe36f1; _is_logged_in=1; _gid=GA1.2.1131925858.1771928956; _sid=pvu8bb4a8e7-f209-4410-a364-5643c9bd5; aws-waf-token=d664116f-2874-487a-80e8-452050f75217:BQoAtnBZO+dHAAAA:I7ufpl2o8cnckezIIa1Di6OEVfre6ncLHEmm1F8R1uwsg/E5+tI8PDiCYPKgnVV7AyEiCmMag6SCsiYO/8MKGtGVX+Nl4A755ePZErU4IgI7n29jlAFpmNSMZx7Joq8wnuWOObSufyEpKwEcuElip7K8AFhN8akHHKqoMVVmOU7nJM4aBUNInSvJy+gTbw4GsuDek0EJ0dqSL5NhUM7IsK51tAnngLWvqE2Ng5hkKbXAM6cRVqS3; adl=true; _ga_YE38MFJRBZ=GS2.1.s1771937082$o9$g1$t1771937614$j60$l0$h0; _ga_34JYJ0BCRN=GS2.1.s1771937082$o9$g1$t1771937615$j59$l0$h0; _ga=GA1.2.56165528.1771677067; _gat_0=1; userLocation={%22lat%22:%2222.9894468%22%2C%22lng%22:%2272.4917066%22%2C%22address%22:%22Shubh%20Westside%20Road%2C%20Makarba%2C%20Ahmedabad%2C%20Gujarat%20382210%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}",
          Referer: "https://www.swiggy.com/restaurants",
        },
        body: null,
        method: "GET",
      },
    );

    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});


(async () => {
  const browser = await puppeteer.launch({
    headless: false, // use true later
    defaultViewport: null,
  });

  const page = await browser.newPage();

  // Listen for network responses
  page.on("response", async (response) => {
    const url = response.url();

    if (url.includes("/dapi/menu/pl")) {
      try {
        const data = await response.json();
        console.log("MENU DATA FOUND ✅");
        console.log(JSON.stringify(data, null, 2));
      } catch (err) {
        console.log("Could not parse response");
      }
    }
  });

  // Open restaurant page (important — not API directly)
  await page.goto(
    "https://www.swiggy.com/city/ahmedabad/99-pancakes-ellis-bridge-rest37687",
    { waitUntil: "networkidle2" }
  );

})();


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
