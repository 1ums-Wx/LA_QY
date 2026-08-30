import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";
import DashboardClient from "./dashboard-client";
export default async function DashboardPage(){
 const supabase=await createClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user)redirect("/login");
 const {data:profile}=await supabase.from("profiles").select("username,display_name").eq("id",user.id).single();
 const {data:memberships}=await supabase.from("contract_members").select("contract_id,role,contracts(id,contract_code,status,created_at,accepted_at,ended_at)").eq("user_id",user.id);
 return <DashboardClient user={{id:user.id,email:user.email??""}} profile={profile} memberships={memberships??[]}/>;
}