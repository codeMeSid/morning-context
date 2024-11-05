import * as dateFns from "date-fns";

export const calculateDateTimeDifference = (compareDateTime: Date) =>
  dateFns.formatDistance(compareDateTime, new Date(), {
    addSuffix: true,
  });
