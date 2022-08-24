import { User } from "./src/models/User";

const user = new User({}, document.getElementById("root"));
user.set({ name: "Hamo" });

user.on("click", () => console.log("clicked"));
