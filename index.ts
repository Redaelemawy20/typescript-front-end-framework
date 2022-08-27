import { User } from "./src/models/User";

const user = new User({}, document.getElementById("root"));
user.attibutes.set({ name: "Hamo" });

user.events.on("click", () => console.log("clicked"));
