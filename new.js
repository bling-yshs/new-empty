import fs from "fs"
import axios from "axios"
import Github from "@actions/github"


async function main() {
	let path = ""
	let octokit = Github.getOctokit("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")
	console.log(typeof path)
	const response = await octokit.request(
		"GET /repos/{owner}/{repo}/contents/{path}?ref=main",
		{
			owner: "bling-yshs",
			repo: "custom-clash-rule",
			path,
			headers: {
				"X-GitHub-Api-Version": "2022-11-28"
			}
		}
	)
	console.log(response.data)
	
}

main()
