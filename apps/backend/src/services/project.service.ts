import { Octokit } from "octokit"
import dotenv from "dotenv"

dotenv.config()

const GH_PAT = process.env.GITHUB_PERSONAL_ACCESS_TOKEN
const octokit = new Octokit({ auth: GH_PAT })

export const authenticateMe = async (): Promise<void> => {
    const {
        data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", login)
}
