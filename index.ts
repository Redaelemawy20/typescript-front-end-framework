import { User } from "./src/models/User";

const user = new User({}, document.getElementById("root"));
user.set({ id: 2 });
user.set({ name: "new name" });
user.save();

user.on("click", () => console.log("clicked"));
