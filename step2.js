import { readFile } from "fs/promises";

async function cat(path) {
    try {
        let contents = await readFile(path, "utf8");
        console.log("file contents", contents);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}

async function webCat(url) {
    try {
        const resp = await fetch(url);
        const data = await resp.text();
        console.log(data);
    } catch (err) {
        console.log(err.message);
    }
}

const path = process.argv[2];
// NOTE: can also use URL.canParse()
try {
    const url = new URL(path);
    await webCat(url);
} catch (err) {
    console.log("Hitting the error path", err);
    await cat(path);
}