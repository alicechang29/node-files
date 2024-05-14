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

await cat(process.argv[2]);