function CanItemAppearInShop(itemId, modeflags, isGated) {
    if (itemId < 0 || itemId >= Item.length)
    {
        return false;
    }

    let maxTier = MaxTierOfShop(modeflags.sshops, isGated);

    if (modeflags.snoj && Item[itemId].JP)
    {
        return false;
    }

    // Sno:apples and Sno:sirens are not mutually exclusive.
    if (modeflags.snoapples)
    {
        let itemName = Item[itemId].NAME;

        if (itemName.endsWith("Apple") || itemName === "SomaDrop")
        {
            return false;
        }
    }

    if (modeflags.snosirens)
    {
        if (Item[itemId].NAME === "Siren")
        {
            return false;
        }
    }

    if (modeflags.snolife)
    {
        if (Item[itemId].NAME === "Life")
        {
            return false;
        }
    }

    return Item[itemId].TIER <= maxTier;
}

function MaxTierOfShop(sshops, isGated) {
    // Ref: https://wiki.ff4fe.com/doku.php?id=shop_randomization
    if (sshops === 'standard')
    {
        if (isGated === true)
        {
            return 5;
        }
        return 4;
    }
    else if (sshops === 'pro')
    {
        if (isGated === true)
        {
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
 * Array index needs to correspond with the item span IDs in tracker.html!
 * {
 *     NAME: User-friendly display name for this item.
 *     TIER: Item tier as indicated in the item stats tables.
 *     JP: True if the item can be removed from shops with Sno:j.
 * }
 */
const Item = [
    {
        NAME: "No items",
        TIER: 0,
        JP: false,
    },
    {
        NAME: "Life",
        TIER: 2,
        JP: false,
    },
    {
        NAME: "Cure2",
        TIER: 3,
        JP: false,
    },
    {
        NAME: "Cure3",
        TIER: 4,
        JP: false,
    },
    {
        NAME: "Ether1",
        TIER: 3,
        JP: false,
    },
    {
        NAME: "Ether2",
        TIER: 4,
        JP: false,
    },
    {
        NAME: "Tent",
        TIER: 2,
        JP: false,
    },
    {
        NAME: "Cabin",
        TIER: 4,
        JP: false,
    },
    {
        NAME: "Heal",
        TIER: 3,
        JP: false,
    },
    {
        NAME: "Unihorn",
        TIER: 2,
        JP: true,
    },
    {
        NAME: "Other (Restore)",
        TIER: 0,
        JP: false,
    },
    {
        NAME: "Bomb",
        TIER: 1,
        JP: true,
    },
    {
        NAME: "Notus",
        TIER: 1,
        JP: true,
    },
    {
        NAME: "ThorRage",
        TIER: 1,
        JP: true,
    },
    {
        NAME: "Vampire",
        TIER: 4,
        JP: true,
    },
    {
        NAME: "Kamikaze",
        TIER: 3,
        JP: true,
    },
    {
        NAME: "Coffin",
        TIER: 5,
        JP: true,
    },
    {
        NAME: "HrGlass",
        TIER: 5,
        JP: true,
    },
    {
        NAME: "MuteBell",
        TIER: 2,
        JP: true,
    },
    {
        NAME: "SilkWeb",
        TIER: 3,
        JP: true,
    },
    {
        NAME: "Bacchus",
        TIER: 5,
        JP: true,
    },
    {
        NAME: "Illusion",
        TIER: 4,
        JP: true,
    },
    {
        NAME: "StarVeil",
        TIER: 2,
        JP: true,
    },
    {
        NAME: "MoonVeil",
        TIER: 6,
        JP: true,
    },
    {
        NAME: "Succubus",
        TIER: 3,
        JP: true,
    },
    {
        NAME: "Exit",
        TIER: 2,
        JP: true,
    },
    {
        NAME: "Siren",
        TIER: 5,
        JP: true,
    },
    {
        NAME: "Other (Utility)",
        TIER: 0,
        JP: false,
    },
    {
        NAME: "AgApple",
        TIER: 6,
        JP: true,
    },
    {
        NAME: "AuApple",
        TIER: 6,
        JP: true,
    },
    {
        NAME: "SomaDrop",
        TIER: 4,
        JP: true,
    },
    {
        NAME: "Other (Misc)",
        TIER: 0,
        JP: false,
    },
    {
        NAME: "Pass",
        TIER: 0,
        JP: false,
    },
    {
        NAME: "Asura",
        TIER: 4,
        JP: false,
    },
    {
        NAME: "Baham",
        TIER: 7,
        JP: false,
    },
    {
        NAME: "Levia",
        TIER: 6,
        JP: false,
    },
    {
        NAME: "Odin",
        TIER: 4,
        JP: false,
    },
    {
        NAME: "Sylph",
        TIER: 4,
        JP: false,
    },
];
Object.freeze(Item);
