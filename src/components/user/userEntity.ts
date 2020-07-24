import {Document, Schema, model} from "mongoose";

export interface IUser extends Document {
    name:string,
    something?:number
}

export const UserSchema = new Schema({
    name: {type:String, required: true},
    somethingElse: Number,
});

const User = model<IUser>("User", UserSchema);
export default User;