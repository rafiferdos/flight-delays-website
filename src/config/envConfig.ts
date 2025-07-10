const envConfig = {
  devMode: process.env.NEXT_PUBLIC_NODE_ENV === "development" ? true : false,
  metadataBaseUrl: process.env.NEXT_PUBLIC_METADATA_BASEURL,
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASEURL,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  imgbbApiKey: process.env.IMGBB_KEY,
  submissionsEmail: process.env.NEXT_PUBLIC_SUBMISSIONS_EMAIL,
  infoEmail: process.env.NEXT_PUBLIC_INFO_EMAIL,
  emailPass: process.env.NEXT_PUBLIC_MAIL_PASS,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID
}

export default envConfig
