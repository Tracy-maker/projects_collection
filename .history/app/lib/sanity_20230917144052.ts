const projectId= "14m7i8qn";
const dataset="production";
const apiVersion = "2023-01-01";

export const client = createClient({projectId, dataset, apiVersion,useCdn:true});