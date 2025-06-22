import { EItem } from "./enums/items";
import {EMonster} from "./enums/monsters";

export const MonsterDrops: Partial<Record<EItem, EMonster[]>> = {
    // Raids
    // COX
    [EItem.ARCANE_PRAYER_SCROLL]: [],
    [EItem.DEXTEROUS_PRAYER_SCROLL]: [],
    [EItem.DINHS_BULWARK]: [],
    [EItem.ANCESTRAL_ROBE_BOTTOM]: [],
    [EItem.ANCESTRAL_ROBE_TOP]: [],
    [EItem.ANCESTRAL_HAT]: [],
    [EItem.DRAGON_CLAWS]: [],
    [EItem.KODAI_INSIGNIA]: [],
    [EItem.ELDER_MAUL]: [],
    [EItem.TWISTED_BOW]: [],

    // TOB
    [EItem.AVERNIC_DEFENDER_HILT]: [],
    [EItem.JUSTICIAR_LEGGUARDS]: [],
    [EItem.JUSTICIAR_CHESTGUARD]: [],
    [EItem.JUSTICIAR_FACEGUARD]: [],
    [EItem.SANGUINESTI_STAFF_UNCHARGED]: [],
    [EItem.GHRAZI_RAPIER]: [],
    [EItem.SCYTHE_OF_VITUR_UNCHARGED]: [],

    // TOA
    [EItem.LIGHTBEARER]: [],
    [EItem.OSMUMTENS_FANG]: [],
    [EItem.ELIDINIS_WARD]: [],
    [EItem.MASORI_CHAPS]: [],
    [EItem.MASORI_BODY]: [],
    [EItem.MASORI_MASK]: [],
    [EItem.TUMEKENS_SHADOW_UNCHARGED]: [],

    // DT2

    [EItem.VIRTUS_MASK]: [EMonster.VARDORVIS, EMonster.THE_WHISPERER, EMonster.DUKE_SUCELLUS, EMonster.THE_LEVIATHAN],
    [EItem.VIRTUS_ROBE_TOP]: [EMonster.VARDORVIS, EMonster.THE_WHISPERER, EMonster.DUKE_SUCELLUS, EMonster.THE_LEVIATHAN],
    [EItem.VIRTUS_ROBE_BOTTOM]: [EMonster.VARDORVIS, EMonster.THE_WHISPERER, EMonster.DUKE_SUCELLUS, EMonster.THE_LEVIATHAN],
    [EItem.CHROMIUM_INGOT]: [EMonster.VARDORVIS, EMonster.THE_WHISPERER, EMonster.DUKE_SUCELLUS, EMonster.THE_LEVIATHAN],
    [EItem.AWAKENERS_ORB]: [EMonster.VARDORVIS, EMonster.THE_WHISPERER, EMonster.DUKE_SUCELLUS, EMonster.THE_LEVIATHAN],

    //GWD
    [EItem.BANDOS_CHESTPLATE]: [],
    [EItem.BANDOS_TASSETS]: [],
    [EItem.BANDOS_BOOTS]: [],
    [EItem.BANDOS_HILT]: [],

    [EItem.ARMADYL_CROSSBOW]: [],
    [EItem.SARADOMIN_HILT]: [],
    [EItem.SARADOMIN_SWORD]: [],
    [EItem.SARADOMINS_LIGHT]: [],

    [EItem.ARMADYL_HELMET]: [],
    [EItem.ARMADYL_CHESTPLATE]: [],
    [EItem.ARMADYL_CHAINSKIRT]: [],
    [EItem.ARMADYL_HILT]: [],

    [EItem.STAFF_OF_THE_DEAD]: [],
    [EItem.ZAMORAKIAN_SPEAR]: [],
    [EItem.STEAM_BATTLESTAFF]: [],
    [EItem.ZAMORAK_HILT]: [],

    [EItem.GODSWORD_SHARD_1]: [EMonster.GENERAL_GRAARDOR, EMonster.COMMANDER_ZILYANA, EMonster.KREEARRA, EMonster.KRIL_TSUTSAROTH],
    [EItem.GODSWORD_SHARD_2]: [EMonster.GENERAL_GRAARDOR, EMonster.COMMANDER_ZILYANA, EMonster.KREEARRA, EMonster.KRIL_TSUTSAROTH],
    [EItem.GODSWORD_SHARD_3]: [EMonster.GENERAL_GRAARDOR, EMonster.COMMANDER_ZILYANA, EMonster.KREEARRA, EMonster.KRIL_TSUTSAROTH],

    [EItem.ANCIENT_HILT]: [],
    [EItem.NIHIL_HORN]: [],
    [EItem.ZARYTE_VAMBRACES]: [],
    [EItem.TORVA_FULL_HELM_DAMAGED]: [],
    [EItem.TORVA_PLATEBODY_DAMAGED]: [],
    [EItem.TORVA_PLATELEGS_DAMAGED]: [],

    // TODO: Figure out unsired drops
    // Abyssal Sire
    [EItem.JAR_OF_MIASMA]: [],
    [EItem.ABYSSAL_DAGGER]: [EMonster.ABYSSAL_SIRE, EMonster.ABYSSAL_DEMON],
    [EItem.ABYSSAL_WHIP]: [EMonster.ABYSSAL_SIRE, EMonster.ABYSSAL_DEMON],

    // Alchemical Hydra
    [EItem.HYDRAS_CLAW]: [],
    [EItem.HYDRA_TAIL]: [],
    [EItem.HYDRA_LEATHER]: [],
    [EItem.JAR_OF_CHEMICALS]: [],

    // TODO: Amoxliatl

    // TODO: Araxxor untradeables

    // Barrows
    [EItem.KARILS_COIF]: [],
    [EItem.KARILS_LEATHERTOP]: [],
    [EItem.KARILS_LEATHERSKIRT]: [],
    [EItem.KARILS_CROSSBOW]: [],

    [EItem.AHRIMS_HOOD]: [],
    [EItem.AHRIMS_ROBETOP]: [],
    [EItem.AHRIMS_ROBESKIRT]: [],
    [EItem.AHRIMS_STAFF]: [],

    [EItem.DHAROKS_HELM]: [],
    [EItem.DHAROKS_PLATEBODY]: [],
    [EItem.DHAROKS_PLATELEGS]: [],
    [EItem.DHAROKS_GREATAXE]: [],

    [EItem.GUTHANS_HELM]: [],
    [EItem.GUTHANS_PLATEBODY]: [],
    [EItem.GUTHANS_CHAINSKIRT]: [],
    [EItem.GUTHANS_WARSPEAR]: [],

    [EItem.TORAGS_HELM]: [],
    [EItem.TORAGS_PLATEBODY]: [],
    [EItem.TORAGS_PLATELEGS]: [],
    [EItem.TORAGS_HAMMERS]: [],

    [EItem.VERACS_HELM]: [],
    [EItem.VERACS_BRASSARD]: [],
    [EItem.VERACS_PLATESKIRT]: [],
    [EItem.VERACS_FLAIL]: [],

    // Bryophyta
    [EItem.BRYOPHYTAS_ESSENCE]: [],

    // Wilderness bosses
    // Callisto and Artio
    [EItem.TYRANNICAL_RING]: [EMonster.CALLISTO, EMonster.ARTIO],
    [EItem.CLAWS_OF_CALLISTO]: [EMonster.CALLISTO, EMonster.ARTIO],
    [EItem.VOIDWAKER_HILT]: [EMonster.CALLISTO, EMonster.ARTIO],

    // Venenatis and Spindel
    [EItem.TREASONOUS_RING]: [EMonster.VENENATIS, EMonster.SPINDEL],
    [EItem.FANGS_OF_VENENATIS]: [EMonster.VENENATIS, EMonster.SPINDEL],
    [EItem.VOIDWAKER_GEM]: [EMonster.VENENATIS, EMonster.SPINDEL],

    // Vet'ion and Calvar'ion
    [EItem.RING_OF_THE_GODS]: [EMonster.VETION, EMonster.CALVARION],
    [EItem.SKULL_OF_VETION]: [EMonster.VETION, EMonster.CALVARION],
    [EItem.VOIDWAKER_BLADE]: [EMonster.VETION, EMonster.CALVARION],

    // Cerberus
    [EItem.ETERNAL_CRYSTAL]: [],
    [EItem.PEGASIAN_CRYSTAL]: [],
    [EItem.PRIMORDIAL_CRYSTAL]: [],
    [EItem.SMOULDERING_STONE]: [EMonster.CERBERUS, EMonster.HELLHOUND],

    // Chaos Fanatic
    [EItem.ODIUM_SHARD_1]: [],
    [EItem.MALEDICTION_SHARD_1]: [],

    // Crazy Archaeologist
    [EItem.ODIUM_SHARD_2]: [],
    [EItem.MALEDICTION_SHARD_2]: [],

    // Scorpia
    [EItem.ODIUM_SHARD_3]: [],
    [EItem.MALEDICTION_SHARD_3]: [],


    // Corporeal Beast
    [EItem.ELYSIAN_SIGIL]: [],
    [EItem.SPECTRAL_SIGIL]: [],
    [EItem.ARCANE_SIGIL]: [],
    [EItem.HOLY_ELIXIR]: [],
    [EItem.SPIRIT_SHIELD]: [],

    // Dagannoth Kings
    [EItem.BERSERKER_RING]: [],
    [EItem.ARCHERS_RING]: [],
    [EItem.SEERS_RING]: [],
    [EItem.WARRIOR_RING]: [],
    [EItem.SEERCULL]: [],
    [EItem.MUD_BATTLESTAFF]: [],

    // Fortis Colosseum
    [EItem.SUNFIRE_FANATIC_CUIRASS]: [],
    [EItem.SUNFIRE_FANATIC_CHAUSSES]: [],
    [EItem.SUNFIRE_FANATIC_HELM]: [],
    [EItem.ECHO_CRYSTAL]: [],
    [EItem.TONALZTICS_OF_RALOS_UNCHARGED]: [],

    // The Gauntlet
    [EItem.CRYSTAL_ARMOUR_SEED]: [],
    [EItem.CRYSTAL_WEAPON_SEED]: [],
    [EItem.ENHANCED_CRYSTAL_WEAPON_SEED]: [],

    // Grotesque Guardians
    [EItem.BLACK_TOURMALINE_CORE]: [],
    [EItem.GRANITE_GLOVES]: [],
    [EItem.GRANITE_RING]: [],
    [EItem.GRANITE_HAMMER]: [],

    // Hespori
    [EItem.BOTTOMLESS_COMPOST_BUCKET]: [],

    // The Hueycoatl
    // TODO: Missing Huey drops

    // Kalphite Queen
    [EItem.JAR_OF_SAND]: [],

    // King Black Dragon
    [EItem.DRACONIC_VISAGE]: [EMonster.KING_BLACK_DRAGON],

    // Kraken
    [EItem.KRAKEN_TENTACLE]: [EMonster.KRAKEN, EMonster.CAVE_KRAKEN],
    [EItem.TRIDENT_OF_THE_SEAS_FULL]: [],
    [EItem.JAR_OF_DIRT]: [],

    // Moons of Peril
    [EItem.ECLIPSE_MOON_CHESTPLATE]: [],
    [EItem.ECLIPSE_MOON_TASSETS]: [],
    [EItem.ECLIPSE_MOON_HELM]: [],
    [EItem.ECLIPSE_ATLATL]: [],

    [EItem.BLUE_MOON_CHESTPLATE]: [],
    [EItem.BLUE_MOON_TASSETS]: [],
    [EItem.BLUE_MOON_HELM]: [],
    [EItem.BLUE_MOON_SPEAR]: [],

    [EItem.BLOOD_MOON_CHESTPLATE]: [],
    [EItem.BLOOD_MOON_TASSETS]: [],
    [EItem.BLOOD_MOON_HELM]: [],
    [EItem.DUAL_MACUAHUITL]: [],

    // The Nightmare
    [EItem.INQUISITORS_MACE]: [],
    [EItem.INQUISITORS_GREAT_HELM]: [],
    [EItem.INQUISITORS_HAUBERK]: [],
    [EItem.INQUISITORS_PLATESKIRT]: [],
    [EItem.NIGHTMARE_STAFF]: [],
    [EItem.VOLATILE_ORB]: [],
    [EItem.HARMONISED_ORB]: [],
    [EItem.ELDRITCH_ORB]: [],
    [EItem.JAR_OF_DREAMS]: [],

    // Obor
    [EItem.HILL_GIANT_CLUB]: [],

    // Phantom Muspah
    [EItem.VENATOR_SHARD]: [],

    // Royal Titans
    // TODO: Missing royal titan drops

    // Sarachnis
    [EItem.JAR_OF_EYES]: [],
    [EItem.SARACHNIS_CUDGEL]: [],

    // Scurrius
    // TODO: Missing scurrius spine

    // Skotizo
    [EItem.JAR_OF_DARKNESS]: [],

    // Thermonuclear Smoke Devil
    [EItem.OCCULT_NECKLACE]: [EMonster.THERMONUCLEAR_SMOKE_DEVIL, EMonster.SMOKE_DEVIL],
    [EItem.SMOKE_BATTLESTAFF]: [],
    [EItem.JAR_OF_SMOKE]: [],

    // Vorkath
    [EItem.SKELETAL_VISAGE]: [EMonster.VORKATH],
    [EItem.JAR_OF_DECAY]: [],
    [EItem.DRAGONBONE_NECKLACE]: [],

    // Zulrah
    [EItem.JAR_OF_SWAMP]: [],
    [EItem.MAGIC_FANG]: [],
    [EItem.SERPENTINE_VISAGE]: [],
    [EItem.TANZANITE_FANG]: [],


    // Misc shared
    [EItem.DRAGON_CHAINBODY]: [EMonster.KALPHITE_QUEEN, EMonster.THERMONUCLEAR_SMOKE_DEVIL, EMonster.CHOKE_DEVIL, EMonster.NUCLEAR_SMOKE_DEVIL, EMonster.DUST_DEVIL, EMonster.SMOKE_DEVIL],
    [EItem.DRAGON_2H_SWORD]: [EMonster.CHAOS_ELEMENTAL, EMonster.SCORPIA, EMonster.CALLISTO, EMonster.KALPHITE_QUEEN, EMonster.VENENATIS, EMonster.VETION, EMonster.ARTIO, EMonster.CALVARION, EMonster.SPINDEL],
    [EItem.DRAGON_PICKAXE]: [EMonster.CHAOS_ELEMENTAL, EMonster.CALLISTO, EMonster.KALPHITE_QUEEN, EMonster.VENENATIS, EMonster.VETION, EMonster.ARTIO, EMonster.CALVARION, EMonster.SPINDEL, EMonster.KING_BLACK_DRAGON],



    // DEBUG
    [EItem.COWHIDE]: [EMonster.COW, EMonster.COW_CALF],
    [EItem.RAW_BEEF]: [EMonster.COW, EMonster.COW_CALF],
    [EItem.BONES]: [EMonster.COW, EMonster.COW_CALF],
}