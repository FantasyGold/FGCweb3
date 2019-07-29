require('dotenv').config();

module.exports = {
  /**
   * Returns the default FantasyGold address.
   * @return {String} Default FantasyGold address.
   */
  getDefaultFantasyGoldAddress: () => {
    if (!process.env.SENDER_ADDRESS) {
      throw Error('Must have SENDER_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.SENDER_ADDRESS));
  },

  /**
   * Returns the FantasyGold network RPC url.
   * @return {String} The FantasyGold network RPC url.
   */
  getFantasyGoldRPCAddress: () => {
    if (!process.env.FGC_RPC_ADDRESS) {
      throw Error('Must have FGC_RPC_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.FGC_RPC_ADDRESS));
  },

  /**
   * Returns the wallet passphrase to unlock the encrypted wallet.
   * @return {String} The wallet passphrase.
   */
  getWalletPassphrase: () => (process.env.WALLET_PASSPHRASE ? String(Buffer.from(process.env.WALLET_PASSPHRASE)) : ''),

  isWalletEncrypted: async (fgcweb3) => {
    const res = await fgcweb3.getWalletInfo();
    return Object.prototype.hasOwnProperty.call(res, 'unlocked_until');
  },
};
