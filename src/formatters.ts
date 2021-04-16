export const formatters = {
  /**
   * Returns the currency icon or a missing icon.
   *
   * @param {string} idIcon
   * @returns {string} url
   */
  imageSrc: (idIcon: string): string => {
    return idIcon
      ? "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_256/" +
          idIcon.replace(/-/g, "") +
          ".png"
      : "/svgs/missing.svg";
  },

  /**
   * Return formatted currency string in USD.
   *
   * @param {number} value
   * @returns {string} Formatted currency string
   */
   currencyString: (value: number): string => {
    return `US$ ${value.toFixed(2)}`;
  },

  /**
   * Return link to page for currency.
   *
   * @param {string} assetId currency identifier
   * @returns Relative url to currency page
   */
  linkToCurrency: (assetId: string): string => {
    return `/${assetId}`;
  },
};
