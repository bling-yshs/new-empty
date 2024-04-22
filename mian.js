import fetch from "node-fetch"

async function main() {
	const config = [
		{forumId: "49", gameType: "2"},
		{forumId: "62", gameType: "6"},
		{forumId: "47", gameType: "5"},
		{forumId: "65", gameType: "8"}
	]
	// 随机生成0到10的整数
	let random = Math.floor(Math.random() * 4)
	let selected = config[random]
	let pageNum = Math.floor(Math.random() * 5)
	const url = `https://bbs-api.miyoushe.com/post/wapi/getForumPostList?forum_id=${selected.forumId}&gids=${selected.gameType}&is_good=false&is_hot=true&page_size=20&sort_type=${pageNum}`
	let response = await fetch(url, {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
			"cache-control": "no-cache",
			"ds": "1711981885,Whzisn,eee5853904553b8817aac89f7239a638",
			"pragma": "no-cache",
			"sec-ch-ua": "\"Chromium\";v=\"5\", \"Not/A)Brand\";v=\"24\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site",
			"x-rpc-app_version": "2.70.0",
			"x-rpc-client_type": "4",
			"x-rpc-device_fp": "38d7f8806b954",
			"x-rpc-device_id": "3c7618753452ac898fb92a0220e22927",
			"cookie": "account_id=272606920; ltoken=Prin63z0AWwqgKGDO0B7BmsEhZoZZdXp3usOPO1X; ltuid=272606920; account_mid_v2=0tugofiq1s_mhy; account_id_v2=272606920; ltmid_v2=0tugofiq1s_mhy; ltuid_v2=272606920; _MHYUUID=3c47e5f0-6d40-403f-aba1-786eafc78707; DEVICEFP_SEED_ID=7ebd06930e1bd785; DEVICEFP_SEED_TIME=1705760086624; _ga=GA1.1.1443159313.1707099046; cookie_token=rnaJ8dmZpHf8vDLESmkYVmDjWS9m6YqRRTAdSzsh; cookie_token_v2=v2_gaS_bLFCZJ1Qem2lZH0dEgZTyd_vczBIRNj-9jgqgpHbkA0mhgla3gqYBE8KZnRbNeTfnEgfg5kesJkZUqX-mOSjoopYjQHgpqqF7SuO-lUDjZqtwKy6qnc1hTQlXCIo2GNR; ltoken_v2=v2_FPIAq77-HcSptV5et9_okQZfQybt7YpoNMNLLEe-E1jOIXxC_xH_pBmkWwqQSsiLCMAWpeLep1hdluMP11yJyahsDBtGt2AJzxqc1WUkKcqetu8REJXRZNm1kBpg2xqGkkSz; DEVICEFP=38d7f8806b954; acw_tc=ac11000117119815784326234e496bc8c62fe5b3dd661baeee30cd171ed946; _ga_KS4J8TXSHQ=GS1.1.1711981578.3.1.1711981865.0.0.0",
			"Referer": "https://www.miyoushe.com/",
			"Referrer-Policy": "strict-origin-when-cross-origin"
		},
		"body": null,
		"method": "GET"
	})
	let result = await response.json()
	let num = Math.floor(Math.random() * 20)
	let imgUrl = result?.data?.list[num]?.cover?.url
	console.log(imgUrl)
	let imgResponse = await fetch(imgUrl)
	let blob = await imgResponse.blob()
	console.log(blob.size / 1024 / 1024)
}

main()
