import { serverSupabaseClient } from '#supabase/server'
export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)
  const {
     name,
     description,    
     price,
     stock_level,
     category_id,
     type_id
    } = await readBody(event);

    const {data , error} = await supabase
    .from("catalog")
    .insert(
        {
        name,
        description,    
        price,
        stock_level,
        category_id,
        type_id
        }
    );

    if(error){
        console.log(error);
        
    }else{
        console.log(data);
    }    
});