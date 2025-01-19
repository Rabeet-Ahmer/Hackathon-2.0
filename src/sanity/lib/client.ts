import { createClient } from 'next-sanity'
import dotenv from "dotenv"
import { apiVersion, dataset, projectId } from '../env'

dotenv.config();
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
