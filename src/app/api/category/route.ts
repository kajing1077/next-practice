import {Category} from "../../models/category.model";
import { createClient } from "../../utils/supabase/server";


export const fetchCategory = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.from('category').select('*');
    return data;
};