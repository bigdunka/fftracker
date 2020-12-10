function CanItemAppearInShop(itemId, sshops, isGated) {
    var maxTier = MaxTierOfShop(sshops, isGated);

    for (const iterator in Item) {
        if (item[iterator].ID === itemId) {
            // If the item's tier is above what this ship allows, no.
            if (item[iterator].TIER > maxTier) {
                return false;
            }

            // If the item is not restricted to Swild, definitely yes.
            if (item[iterator].SWILD_ONLY === false) {
                return true;
            }

            // Swild-restricted item in tier, check that this is Swild.
            return sshops === 'wild';
        }
    }

    // Couldn't find the item in our data, assume we should allow it to show up for safety.
    return true;
}

function MaxTierOfShop(sshops, is_gated) {
    // Ref: https://wiki.ff4fe.com/doku.php?id=shop_randomization
    if (sshops === 'standard') {
        if (is_gated === true) {
            return 5;
        }
        return 4;
    }
    else if (sshops === 'pro') {
        if (is_gated === true) {
            return 4;
        }
        return 3;
    }

    // Could be Swild, Sshuffle, or some other non-weighted randomization.
    return 7;
}

/*
 * https://wiki.ff4fe.com/doku.php?id=item_stats_tables
 * 
 * ITEM_NAME {
 *     ID: Internal ID for the CheckItemSpan function.
 *     TIER: Item tier as indicated in the item stats tables.
 *     JP: True if the item can be removed from shops with Sno:j.
 *     SWILD_ONLY: True if the item is only found with Swild.
 * }
 */
const Item = {
    NO_ITEMS: {
        ID: 0,
        TIER: 0,
        JP: false,
        SWILD_ONLY: false,
    },
    LIFE: {
        ID: 1,
        TIER: 2,
        JP: false,
        SWILD_ONLY: false,
    },
    CURE1: {
        ID: 2,
        TIER: 1,
        JP: false,
        SWILD_ONLY: false,
    },
    CURE2: {
        ID: 3,
        TIER: 3,
        JP: false,
        SWILD_ONLY: false,
    },
    CURE3: {
        ID: 4,
        TIER: 4,
        JP: false,
        SWILD_ONLY: false,
    },
    ETHER1: {
        ID: 5,
        TIER: 3,
        JP: false,
        SWILD_ONLY: false,
    },
    ETHER2: {
        ID: 6,
        TIER: 4,
        JP: false,
        SWILD_ONLY: false,
    },
    TENT: {
        ID: 7,
        TIER: 2,
        JP: false,
        SWILD_ONLY: false,
    },
    CABIN: {
        ID: 8,
        TIER: 4,
        JP: false,
        SWILD_ONLY: false,
    },
    BOMB: {
        ID: 9,
        TIER: 1,
        JP: true,
        SWILD_ONLY: false,
    },
    NOTUS: {
        ID: 10,
        TIER: 1,
        JP: true,
        SWILD_ONLY: false,
    },
    THORRAGE: {
        ID: 11,
        TIER: 1,
        JP: true,
        SWILD_ONLY: false,
    },
    VAMPIRE: {
        ID: 12,
        TIER: 4,
        JP: true,
        SWILD_ONLY: false,
    },
    KAMIKAZE: {
        ID: 13,
        TIER: 3,
        JP: true,
        SWILD_ONLY: false,
    },
    BIGBOMB: {
        ID: 14,
        TIER: 4,
        JP: true,
        SWILD_ONLY: true,
    },
    BOREAS: {
        ID: 15,
        TIER: 4,
        JP: true,
        SWILD_ONLY: true,
    },
    ZEUSRAGE: {
        ID: 16,
        TIER: 4,
        JP: true,
        SWILD_ONLY: true,
    },
    FIREBOMB: {
        ID: 17,
        TIER: 4,
        JP: true,
        SWILD_ONLY: true,
    },
    BLIZZARD: {
        ID: 18,
        TIER: 4,
        JP: true,
        SWILD_ONLY: true,
    },
    LITBOLT: {
        ID: 19,
        TIER: 4,
        JP: true,
        SWILD_ONLY: true,
    },
    GAIADRUM: {
        ID: 20,
        TIER: 4,
        JP: true,
        SWILD_ONLY: true,
    },
    STARDUST: {
        ID: 21,
        TIER: 4,
        JP: false,
        SWILD_ONLY: true,
    },
    GRIMOIRE: {
        ID: 22,
        TIER: 4,
        JP: true,
        SWILD_ONLY: true,
    },
    HRGLASS1: {
        ID: 23,
        TIER: 5, // Assumed
        JP: true,
        SWILD_ONLY: true,
    },
    HRGLASS2: {
        ID: 24,
        TIER: 5,
        JP: true,
        SWILD_ONLY: false,
    },
    HRGLASS3: {
        ID: 25,
        TIER: 5, // Assumed
        JP: false,
        SWILD_ONLY: true,
    },
    STARVEIL: {
        ID: 26,
        TIER: 2,
        JP: true,
        SWILD_ONLY: false,
    },
    MOONVEIL: {
        ID: 27,
        TIER: 6,
        JP: true,
        SWILD_ONLY: false,
    },
    EXIT: {
        ID: 28,
        TIER: 2,
        JP: true,
        SWILD_ONLY: false,
    },
    ILLUSION: {
        ID: 29,
        TIER: 4,
        JP: true,
        SWILD_ONLY: false,
    },
    COFFIN: {
        ID: 30,
        TIER: 5,
        JP: true,
        SWILD_ONLY: false,
    },
    BACCHUS: {
        ID: 31,
        TIER: 5,
        JP: true,
        SWILD_ONLY: false,
    },
    SIREN: {
        ID: 32,
        TIER: 5,
        JP: true,
        SWILD_ONLY: false,
    },
    SILKWEB: {
        ID: 33,
        TIER: 3,
        JP: true,
        SWILD_ONLY: false,
    },
    PASS: {
        ID: 34,
        TIER: 0,
        JP: false,
        SWILD_ONLY: false,
    },
    OTHER: {
        ID: 35,
        TIER: 0,
        JP: false,
        SWILD_ONLY: false,
    },
};
Object.freeze(Item);
