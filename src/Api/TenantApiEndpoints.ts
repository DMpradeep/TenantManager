// import { Tenant } from "../Models/Tenant";

// export const GetAllTenants = async () : Promise<Tenant[]> => {
//     try {
//       const result = await fetch("https://hungry-skinny-cappelletti.glitch.me/tenants")
//       const tenants = await result.json() as Tenant[];
//       const validTenants = tenants.filter(tenant => tenant.id.match(/^[t0-9]+$/i))
//       return validTenants;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

const baseUrl = "https://hungry-skinny-cappelletti.glitch.me" //read base url from config

export const TenantApiEndpoints = {
  tenantList: `${baseUrl}/tenants`
}