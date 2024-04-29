const dev = process.env.NODE_ENV !== 'production';

// export const server = dev ? 'http://localhost:3000' : 'https://../pages';

export const server = dev ? 'http://localhost:3000' : "https://alluvium.net";

export const baseURL = 'http://localhost:3000';

export const databaseURI = "mongodb://mongoAdmin:pEf5YbzvarY54KH4HrvG@deny.ec2.alluvium.net/alluvium?directConnection=true&authMechanism=SCRAM-SHA-256&authSource=admin";
// export const databaseURI = dev ? process.env.NEXT_PUBLIC_DB_URI_ORIGIN : process.env.NEXT_PUBLIC_ALLUVIUM_DB_URI;

export const mailFrom = process.env.MAIL_FROM;
export const mailTo = "contact@alluvium.net";
// export const mailTo = process.env.MAIL_TO;
export const nodemailerTransportHost = process.env.NODEMAILER_TRANSPORT_HOST;
export const lockEventsFollowUpForm = process.env.NEXT_PUBLIC_LOCK_EVENTS_FOLLOW_UP_FORM == 'true';
export const currentEventName = process.env.NEXT_PUBLIC_CURRENT_EVENT_NAME;
export const password = process.env.NEXT_PUBLIC_PASSWORD;
