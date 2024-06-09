export default async (file) =>  {
    const response = await fetch("../components/" +file)
    const data = await response.text()
    return data;
}