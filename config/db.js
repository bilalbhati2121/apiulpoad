import mongoose from "mongoose";
export const db =async()=>{
    const conn =await mongoose.connect(
        "mongodb+srv://raddy:Kk7jXaguwdXmkDb3@cluster0.pp5x8bo.mongodb.net/"
    )
    console.log("Host----",conn.connection.host)
}


export default db;


