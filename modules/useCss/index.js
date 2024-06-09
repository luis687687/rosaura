import openFile from "../openFile/index.js"

export default async file => {
    const data = await openFile(file)
    return data
}