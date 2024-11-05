import * as dateFns from "date-fns";

export const LIVE_NEWS_LIST = [
  {
    isBreakingNews: false,
    postedDateTime: dateFns.subMinutes(new Date(), 25),
    newsTitle:
      "Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea",
  },
  {
    isBreakingNews: true,
    postedDateTime: dateFns.subMinutes(new Date(), 25),
    newsTitle:
      "Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea",
  },
  {
    isBreakingNews: false,
    postedDateTime: dateFns.subMinutes(new Date(), 25),
    newsTitle:
      "Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea",
  },
  {
    isBreakingNews: true,
    postedDateTime: dateFns.subMinutes(new Date(), 25),
    newsTitle:
      "Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea",
  },
  {
    isBreakingNews: false,
    postedDateTime: dateFns.subMinutes(new Date(), 25),
    newsTitle:
      "Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea",
  },
];

export const TODAY_NEWS_LIST = [
  {
    newsCategory: "business",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/460b/7ba2/cef7f3b55ea636ab34295402fb4c9c30?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a41EfstAmc9klHyhl1MA9SX0rPfpMnXG7cXyqEXy00KTKcpj5oT1b1-Wri-3wQEC8oH1nVpG7xhEiWwfn1YQ5IMURA6QGna5yb-SzJ1jfKGMxINgFq~riFmaolWVICAvERDK~PxSNrvG0rLXIwNDUpg4YqTQdNj4QjWdZHbHM9KoFXxGEyFkfoMbcZ9En4wMudeHR0gH6bMqo020BH19fiI~Ix9ngcyix6HJZqtuwhAHtTG9BPdiuzNdbI2qBVfcGgBvR~53oLWYk43zqHt3qCHYnPlz2IokkLenDtkDBZG54AJ2Y4ezLOKPDHQaun5sF-Ml7X9-xRxiD59SMiXDxg__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    newsSnippet:
      "In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    newsReadDuration: 5,
    commentsCount: 25,
  },
  {
    newsCategory: "business",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/dc14/c168/a437cbcac0ff201ec24f2c85a9f04d55?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJ-l9FeoZtPdqqlpvK5SsaMJsk1WPCLpub8cT4yK1liHelP~KwomB0-MAvWYU-Fy7EE08eXCBMery6odqRrp8YLwp2JcBgqufCUjAT~o8a0EHuQw~-pgslExZQ7qYsSZxoT5Dl74zPNusS1rVzmrgChxeN9mrByYxtHhttilyxre7AQOSSLwJMb26fnDmwqAY7npWkNogIqds-bIHQdPJ8fM22En-0aYJ1vIpGihzQIAKHFMWeLZ55ml~v5QvrBVZcrPKGmYLyBHtSfMB-d2NAZdlccL0bl~uKKPyvLgg2zJvpQsocMn3Am3gDiXitrY~OO7POSpBcLLJ6v1ilvJGA__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    newsSnippet:
      "In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    newsReadDuration: 5,
    commentsCount: 25,
  },
  {
    newsCategory: "business",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/2f8d/35e9/ae7eee1b1d07e829b629c397cb4d2849?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xns~1vEH-MT9bxydnTJLzvp8cdmXs1Fgh6UdJknvbg-bQrIAdjpetVG~aYXiRZMnVg8150fmRnM4Q~5EqK7hJa19j3TbZiLT3DgBEUKM6FzS1yJSrVnuiuhR3Ne-Z7619gEoaQq2ngo22u4LZ0AXI7bdrjY8gMEaHijyGNDCgpkz23Fx3fIcRx0pGQ67nX9IjiKI~GUfVvcuVhgMM5t6viROUXgjZJATyAnaC~j~l77CtzzbWKNfMsaSIpda7D1tkU5VbPbp-OmXgpmTmCjyW~tM1~qjJHkKj2WcKjKTdA33xZkfQtbeetOHx~KmatMhd8p6OYJ-n-qTAtpDPjq7Ng__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    newsSnippet:
      "In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    newsReadDuration: 5,
    commentsCount: 25,
  },
];

export const YESTERDAY_NEWS_LIST = [
  {
    newsTitle: "Government curbs export of COVID-19 Rapid Antigen Testing kits",
    newsSeverity: "low",
    newsSnippet:
      "In a notification on Monday, the Directorate General of Foreign Trade (DGFT) said that the export of COVID-19...",
  },
  {
    newsTitle: "Government curbs export of COVID-19 Rapid Antigen Testing kits",
    newsSeverity: "medium",
    newsSnippet:
      "In a notification on Monday, the Directorate General of Foreign Trade (DGFT) said that the export of COVID-19...",
  },
  {
    newsTitle: "Government curbs export of COVID-19 Rapid Antigen Testing kits",
    newsSeverity: "high",
    newsSnippet:
      "In a notification on Monday, the Directorate General of Foreign Trade (DGFT) said that the export of COVID-19...",
  },
];

export const TOP_NEWS_LIST = [
  {
    newsCategory: "business",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/460b/7ba2/cef7f3b55ea636ab34295402fb4c9c30?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a41EfstAmc9klHyhl1MA9SX0rPfpMnXG7cXyqEXy00KTKcpj5oT1b1-Wri-3wQEC8oH1nVpG7xhEiWwfn1YQ5IMURA6QGna5yb-SzJ1jfKGMxINgFq~riFmaolWVICAvERDK~PxSNrvG0rLXIwNDUpg4YqTQdNj4QjWdZHbHM9KoFXxGEyFkfoMbcZ9En4wMudeHR0gH6bMqo020BH19fiI~Ix9ngcyix6HJZqtuwhAHtTG9BPdiuzNdbI2qBVfcGgBvR~53oLWYk43zqHt3qCHYnPlz2IokkLenDtkDBZG54AJ2Y4ezLOKPDHQaun5sF-Ml7X9-xRxiD59SMiXDxg__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    commentsCount: 25,
  },
  {
    newsCategory: "business",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/59d2/03a2/d0e922954e1f70433f964bc143af9449?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fDwqGVlvcWiGK6lVWmZ4p1hfRVcu3WSxZUnMEoIEILdQ~cRnRmkMpztnoS~TMUORDRa8ZZDX2p2u58s4w1-rAgd85azslM2oUkSY-eSwx8En6Vf4vExIBZ5x431eBQDWCG0p6RQxCo5BIkoSutwcM6WlaOp8~0xI~9zMyDkl7Cj3t2vIR4wmVZDfk-3jopa0UPKAmrSr72Y-ii4ucQWIpXLMKfjUlmLxHkas1Zo-iOHtEYFHad-mzatjQvSR0gBficP58XWBxVurimGSt39NbRdfXJ~k4CSi6AHdsp4Ed83bxz~HUt~a398XWXmrbvmiT6BRfXCDAjdmlKKEWSM66A__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    commentsCount: 25,
  },
  {
    newsCategory: "business",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/a777/507b/b7e69ad6d1001bf9e69cb57b8435710f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8GoV1aLzAMT~ptfa6ojgxEVcVRXaofD1zAibLsJd1fq-UQedXkJaoBMUtrZO4QCF~1FHIwC4Hy6AcOY-9-EG8sd-QwscIcRMLX~TLbGUbr4gi3lh5GspCnp8h0Yroe6Opt2lFOaglsP4-CjCotPdvG-Q2d4ugrHUDJbBwn6ui7ePKIQDWhlvD0qggHG7wpV7OURnuEZ8LY~~mDzihsE04qCgpv5DZ84dl-IwAW7jnvkDmYI9xXeinV2PuXYk0lYvAtL~LYbbGV6M33C5sb0lYOA4MARFJS2vEsO6oQdPff5o~m9BbO9aa4aMFcqCMFeDFozdqvf-DOXbcY37oJoBw__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    commentsCount: 25,
  },
  {
    newsCategory: "business",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/460b/7ba2/cef7f3b55ea636ab34295402fb4c9c30?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a41EfstAmc9klHyhl1MA9SX0rPfpMnXG7cXyqEXy00KTKcpj5oT1b1-Wri-3wQEC8oH1nVpG7xhEiWwfn1YQ5IMURA6QGna5yb-SzJ1jfKGMxINgFq~riFmaolWVICAvERDK~PxSNrvG0rLXIwNDUpg4YqTQdNj4QjWdZHbHM9KoFXxGEyFkfoMbcZ9En4wMudeHR0gH6bMqo020BH19fiI~Ix9ngcyix6HJZqtuwhAHtTG9BPdiuzNdbI2qBVfcGgBvR~53oLWYk43zqHt3qCHYnPlz2IokkLenDtkDBZG54AJ2Y4ezLOKPDHQaun5sF-Ml7X9-xRxiD59SMiXDxg__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    commentsCount: 25,
  },
];

export const LATEST_NEWSLETTER_LIST = [
  {
    newsCategory: "street smart",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/460b/7ba2/cef7f3b55ea636ab34295402fb4c9c30?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a41EfstAmc9klHyhl1MA9SX0rPfpMnXG7cXyqEXy00KTKcpj5oT1b1-Wri-3wQEC8oH1nVpG7xhEiWwfn1YQ5IMURA6QGna5yb-SzJ1jfKGMxINgFq~riFmaolWVICAvERDK~PxSNrvG0rLXIwNDUpg4YqTQdNj4QjWdZHbHM9KoFXxGEyFkfoMbcZ9En4wMudeHR0gH6bMqo020BH19fiI~Ix9ngcyix6HJZqtuwhAHtTG9BPdiuzNdbI2qBVfcGgBvR~53oLWYk43zqHt3qCHYnPlz2IokkLenDtkDBZG54AJ2Y4ezLOKPDHQaun5sF-Ml7X9-xRxiD59SMiXDxg__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    newsSnippet:
      "In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    newsReadDuration: 5,
    commentsCount: 25,
  },
  {
    newsCategory: "street smart",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/dc14/c168/a437cbcac0ff201ec24f2c85a9f04d55?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJ-l9FeoZtPdqqlpvK5SsaMJsk1WPCLpub8cT4yK1liHelP~KwomB0-MAvWYU-Fy7EE08eXCBMery6odqRrp8YLwp2JcBgqufCUjAT~o8a0EHuQw~-pgslExZQ7qYsSZxoT5Dl74zPNusS1rVzmrgChxeN9mrByYxtHhttilyxre7AQOSSLwJMb26fnDmwqAY7npWkNogIqds-bIHQdPJ8fM22En-0aYJ1vIpGihzQIAKHFMWeLZ55ml~v5QvrBVZcrPKGmYLyBHtSfMB-d2NAZdlccL0bl~uKKPyvLgg2zJvpQsocMn3Am3gDiXitrY~OO7POSpBcLLJ6v1ilvJGA__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    newsSnippet:
      "In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    newsReadDuration: 5,
    commentsCount: 25,
  },
  {
    newsCategory: "street smart",
    newsImageSrc:
      "https://s3-alpha-sig.figma.com/img/2f8d/35e9/ae7eee1b1d07e829b629c397cb4d2849?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xns~1vEH-MT9bxydnTJLzvp8cdmXs1Fgh6UdJknvbg-bQrIAdjpetVG~aYXiRZMnVg8150fmRnM4Q~5EqK7hJa19j3TbZiLT3DgBEUKM6FzS1yJSrVnuiuhR3Ne-Z7619gEoaQq2ngo22u4LZ0AXI7bdrjY8gMEaHijyGNDCgpkz23Fx3fIcRx0pGQ67nX9IjiKI~GUfVvcuVhgMM5t6viROUXgjZJATyAnaC~j~l77CtzzbWKNfMsaSIpda7D1tkU5VbPbp-OmXgpmTmCjyW~tM1~qjJHkKj2WcKjKTdA33xZkfQtbeetOHx~KmatMhd8p6OYJ-n-qTAtpDPjq7Ng__",
    newsTitle: "Is Bandhan banking too much on microfinance?",
    newsSnippet:
      "In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.",
    publisherImageSrc:
      "https://s3-alpha-sig.figma.com/img/165b/bcf9/a5d1449563b4d9c6d37cb48cbafefa5c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxDQuvwcG90cD-N-IHiHYKH5V8itEy2tvAvyZfQcMlrgA7IVc7NUHRyz9mCHASEsHwKzsb4oyGzaEXiQS0oMVFUsxzlNWjIzu8bOvbrk211g9WHSgBLq-eYutRjaab9R9xlnj5eT0dmq~7dXw~XaOtPveFDiR4dTDqAi6RagqRLZk4Ts-4GnuUwcbthc7smiRlCCRmaifgdDlmtz6yKxGQSmDeAo59Kut8IJQh-8CmqOxQ8cOIeV4p7O96yVOzGkOzpUHbsNnikX2fGJtJ55RyhS2ofArIPQBKZ4JFmAQ2q9bBqN2VsUuj~Gs6ue9dlZ0npHdT02h335UDCzud9iRQ__",
    publisherName: "Ashish K. Mishra",
    newsReadDuration: 5,
    commentsCount: 25,
  },
];

export const NEWSLATTER_CATEGORY_LIST = [
  "internet",
  "business",
  "chaos",
  "sports",
  "economics",
  "legal",
  "science",
  "govt policy",
];
