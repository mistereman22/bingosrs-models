import {EItem} from "./enums/items";
import {EMonster} from "./enums/monsters";

export const MonsterDrops: Partial<Record<EItem, EMonster[]>> = {
    // Raids
    // COX
    [EItem.OLMLET]: [],
    [EItem.METAMORPHIC_DUST]: [],
    [EItem.TWISTED_ANCESTRAL_COLOUR_KIT]: [],
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
    [EItem.LIL_ZIK]: [],
    [EItem.SANGUINE_DUST]: [],
    [EItem.HOLY_ORNAMENT_KIT]: [],
    [EItem.SANGUINE_ORNAMENT_KIT]: [],
    [EItem.AVERNIC_DEFENDER_HILT]: [],
    [EItem.JUSTICIAR_LEGGUARDS]: [],
    [EItem.JUSTICIAR_CHESTGUARD]: [],
    [EItem.JUSTICIAR_FACEGUARD]: [],
    [EItem.SANGUINESTI_STAFF_UNCHARGED]: [],
    [EItem.GHRAZI_RAPIER]: [],
    [EItem.SCYTHE_OF_VITUR_UNCHARGED]: [],

    // TOA
    [EItem.TUMEKENS_GUARDIAN]: [],
    [EItem.LIGHTBEARER]: [],
    [EItem.OSMUMTENS_FANG]: [],
    [EItem.ELIDINIS_WARD]: [],
    [EItem.MASORI_CHAPS]: [],
    [EItem.MASORI_BODY]: [],
    [EItem.MASORI_MASK]: [],
    [EItem.TUMEKENS_SHADOW_UNCHARGED]: [],
    [EItem.MASORI_CRAFTING_KIT]: [],
    [EItem.MENAPHITE_ORNAMENT_KIT]: [],
    [EItem.CURSED_PHALANX]: [],
    [EItem.REMNANT_OF_AKKHA]: [],
    [EItem.REMNANT_OF_BABA]: [],
    [EItem.REMNANT_OF_KEPHRI]: [],
    [EItem.REMNANT_OF_ZEBAK]: [],
    [EItem.ANCIENT_REMNANT]: [],

    // DT2
    // Duke Sucellus
    [EItem.BARON]: [],
    [EItem.EYE_OF_THE_DUKE]: [],
    [EItem.MAGUS_VESTIGE]: [],

    // The Leviathan
    [EItem.LILVIATHAN]: [],
    [EItem.LEVIATHANS_LURE]: [],
    [EItem.VENATOR_VESTIGE]: [],

    // Vardorvis
    [EItem.BUTCH]: [],
    [EItem.EXECUTIONERS_AXE_HEAD]: [],
    [EItem.ULTOR_VESTIGE]: [],

    // The Whisperer
    [EItem.WISP]: [],
    [EItem.SIRENS_STAFF]: [],
    [EItem.BELLATOR_VESTIGE]: [],

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
    [EItem.PET_GENERAL_GRAARDOR]: [],

    [EItem.ARMADYL_CROSSBOW]: [],
    [EItem.SARADOMIN_HILT]: [],
    [EItem.SARADOMIN_SWORD]: [],
    [EItem.SARADOMINS_LIGHT]: [],
    [EItem.PET_ZILYANA]: [],

    [EItem.ARMADYL_HELMET]: [],
    [EItem.ARMADYL_CHESTPLATE]: [],
    [EItem.ARMADYL_CHAINSKIRT]: [],
    [EItem.ARMADYL_HILT]: [],
    [EItem.PET_KREEARRA]: [],

    [EItem.STAFF_OF_THE_DEAD]: [],
    [EItem.ZAMORAKIAN_SPEAR]: [],
    [EItem.STEAM_BATTLESTAFF]: [],
    [EItem.ZAMORAK_HILT]: [],
    [EItem.PET_KRIL_TSUTSAROTH]: [],

    [EItem.GODSWORD_SHARD_1]: [EMonster.GENERAL_GRAARDOR, EMonster.COMMANDER_ZILYANA, EMonster.KREEARRA, EMonster.KRIL_TSUTSAROTH],
    [EItem.GODSWORD_SHARD_2]: [EMonster.GENERAL_GRAARDOR, EMonster.COMMANDER_ZILYANA, EMonster.KREEARRA, EMonster.KRIL_TSUTSAROTH],
    [EItem.GODSWORD_SHARD_3]: [EMonster.GENERAL_GRAARDOR, EMonster.COMMANDER_ZILYANA, EMonster.KREEARRA, EMonster.KRIL_TSUTSAROTH],

    [EItem.ANCIENT_HILT]: [],
    [EItem.NIHIL_HORN]: [],
    [EItem.ZARYTE_VAMBRACES]: [],
    [EItem.TORVA_FULL_HELM_DAMAGED]: [],
    [EItem.TORVA_PLATEBODY_DAMAGED]: [],
    [EItem.TORVA_PLATELEGS_DAMAGED]: [],
    [EItem.NEXLING]: [],

    // Abyssal Sire
    [EItem.JAR_OF_MIASMA]: [],
    [EItem.BLUDGEON_AXON]: [],
    [EItem.BLUDGEON_CLAW]: [],
    [EItem.BLUDGEON_SPINE]: [],
    [EItem.ABYSSAL_DAGGER]: [EMonster.ABYSSAL_SIRE, EMonster.ABYSSAL_DEMON],
    [EItem.ABYSSAL_WHIP]: [EMonster.ABYSSAL_SIRE, EMonster.ABYSSAL_DEMON],
    [EItem.ABYSSAL_ORPHAN]: [],
    [EItem.UNSIRED]: [],
    [EItem.ABYSSAL_HEAD]: [],

    // Alchemical Hydra
    [EItem.HYDRAS_CLAW]: [],
    [EItem.HYDRA_TAIL]: [],
    [EItem.HYDRA_LEATHER]: [],
    [EItem.JAR_OF_CHEMICALS]: [],
    [EItem.IKKLE_HYDRA]: [],
    [EItem.HYDRAS_FANG]: [],
    [EItem.HYDRAS_EYE]: [],
    [EItem.HYDRAS_HEART]: [],
    [EItem.ALCHEMICAL_HYDRA_HEADS]: [],

    // Amoxliatl
    [EItem.MOXI]: [],
    [EItem.GLACIAL_TEMOTLI]: [],
    [EItem.PENDANT_OF_ATES_INERT]: [],

    // Araxxor
    [EItem.NID]: [],
    [EItem.ARAXYTE_FANG]: [],
    [EItem.NOXIOUS_POINT]: [],
    [EItem.NOXIOUS_BLADE]: [],
    [EItem.NOXIOUS_POMMEL]: [],
    [EItem.ARAXYTE_HEAD]: [],
    [EItem.JAR_OF_VENOM]: [],

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
    [EItem.CALLISTO_CUB]: [],

    // Venenatis and Spindel
    [EItem.TREASONOUS_RING]: [EMonster.VENENATIS, EMonster.SPINDEL],
    [EItem.FANGS_OF_VENENATIS]: [EMonster.VENENATIS, EMonster.SPINDEL],
    [EItem.VOIDWAKER_GEM]: [EMonster.VENENATIS, EMonster.SPINDEL],
    [EItem.VENENATIS_SPIDERLING]: [],

    // Vet'ion and Calvar'ion
    [EItem.RING_OF_THE_GODS]: [EMonster.VETION, EMonster.CALVARION],
    [EItem.SKULL_OF_VETION]: [EMonster.VETION, EMonster.CALVARION],
    [EItem.VOIDWAKER_BLADE]: [EMonster.VETION, EMonster.CALVARION],
    [EItem.VETION_JR]: [],

    // Cerberus
    [EItem.ETERNAL_CRYSTAL]: [],
    [EItem.PEGASIAN_CRYSTAL]: [],
    [EItem.PRIMORDIAL_CRYSTAL]: [],
    [EItem.SMOULDERING_STONE]: [EMonster.CERBERUS, EMonster.HELLHOUND],
    [EItem.JAR_OF_SOULS]: [],
    [EItem.HELLPUPPY]: [],

    // Chaos Fanatic
    [EItem.ODIUM_SHARD_1]: [],
    [EItem.MALEDICTION_SHARD_1]: [],
    [EItem.PET_CHAOS_ELEMENTAL]: [EMonster.CHAOS_ELEMENTAL, EMonster.CHAOS_FANATIC],

    // Crazy Archaeologist
    [EItem.ODIUM_SHARD_2]: [],
    [EItem.MALEDICTION_SHARD_2]: [],

    // Scorpia
    [EItem.ODIUM_SHARD_3]: [],
    [EItem.MALEDICTION_SHARD_3]: [],
    [EItem.SCORPIAS_OFFSPRING]: [],


    // Corporeal Beast
    [EItem.ELYSIAN_SIGIL]: [],
    [EItem.SPECTRAL_SIGIL]: [],
    [EItem.ARCANE_SIGIL]: [],
    [EItem.HOLY_ELIXIR]: [],
    [EItem.SPIRIT_SHIELD]: [],
    [EItem.PET_DARK_CORE]: [],

    // Dagannoth Kings
    [EItem.BERSERKER_RING]: [],
    [EItem.ARCHERS_RING]: [],
    [EItem.SEERS_RING]: [],
    [EItem.WARRIOR_RING]: [],
    [EItem.SEERCULL]: [],
    [EItem.MUD_BATTLESTAFF]: [],
    [EItem.PET_DAGANNOTH_PRIME]: [],
    [EItem.PET_DAGANNOTH_SUPREME]: [],
    [EItem.PET_DAGANNOTH_REX]: [],

    // Fortis Colosseum
    [EItem.SUNFIRE_FANATIC_CUIRASS]: [],
    [EItem.SUNFIRE_FANATIC_CHAUSSES]: [],
    [EItem.SUNFIRE_FANATIC_HELM]: [],
    [EItem.ECHO_CRYSTAL]: [],
    [EItem.TONALZTICS_OF_RALOS_UNCHARGED]: [],
    [EItem.SMOL_HEREDIT]: [],

    // The Gauntlet
    [EItem.CRYSTAL_ARMOUR_SEED]: [],
    [EItem.CRYSTAL_WEAPON_SEED]: [],
    [EItem.ENHANCED_CRYSTAL_WEAPON_SEED]: [],
    [EItem.YOUNGLLEF]: [],

    // Grotesque Guardians
    [EItem.BLACK_TOURMALINE_CORE]: [],
    [EItem.GRANITE_GLOVES]: [],
    [EItem.GRANITE_RING]: [],
    [EItem.GRANITE_HAMMER]: [],
    [EItem.NOON]: [],

    // Hespori
    [EItem.BOTTOMLESS_COMPOST_BUCKET]: [],

    // The Hueycoatl
    [EItem.HUBERTE]: [],
    [EItem.DRAGON_HUNTER_WAND]: [],
    [EItem.TOME_OF_EARTH]: [],
    [EItem.HUEYCOATL_HIDE]: [],

    // Kalphite Queen
    [EItem.JAR_OF_SAND]: [],
    [EItem.KALPHITE_PRINCESS]: [],

    // King Black Dragon
    [EItem.DRACONIC_VISAGE]: [EMonster.KING_BLACK_DRAGON, EMonster.VORKATH__2],
    [EItem.PRINCE_BLACK_DRAGON]: [],

    // Kraken
    [EItem.KRAKEN_TENTACLE]: [EMonster.KRAKEN, EMonster.CAVE_KRAKEN],
    [EItem.TRIDENT_OF_THE_SEAS_FULL]: [],
    [EItem.JAR_OF_DIRT]: [],
    [EItem.PET_KRAKEN]: [],

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
    [EItem.LITTLE_NIGHTMARE]: [],

    // Obor
    [EItem.HILL_GIANT_CLUB]: [],

    // Phantom Muspah
    [EItem.MUPHIN]: [],
    [EItem.VENATOR_SHARD]: [],
    [EItem.ANCIENT_ICON]: [],

    // Royal Titans
    [EItem.BRAN]: [],
    [EItem.DEADEYE_PRAYER_SCROLL]: [],
    [EItem.MYSTIC_VIGOUR_PRAYER_SCROLL]: [],
    [EItem.GIANTSOUL_AMULET]: [],
    [EItem.ICE_ELEMENT_STAFF_CROWN]: [],
    [EItem.FIRE_ELEMENT_STAFF_CROWN]: [],


    // Sarachnis
    [EItem.JAR_OF_EYES]: [],
    [EItem.SARACHNIS_CUDGEL]: [],
    [EItem.SRARACHA]: [],

    // Scurrius
    [EItem.SCURRIUS_SPINE]: [],
    [EItem.SCURRY]: [],

    // Skotizo
    [EItem.JAR_OF_DARKNESS]: [],
    [EItem.DARK_CLAW]: [],
    [EItem.SKOTOS]: [],

    // Thermonuclear Smoke Devil
    [EItem.PET_SMOKE_DEVIL]: [],
    [EItem.OCCULT_NECKLACE]: [EMonster.THERMONUCLEAR_SMOKE_DEVIL, EMonster.SMOKE_DEVIL],
    [EItem.SMOKE_BATTLESTAFF]: [],
    [EItem.JAR_OF_SMOKE]: [],

    // Vorkath
    [EItem.VORKI]: [],
    [EItem.SKELETAL_VISAGE]: [EMonster.VORKATH__2],
    [EItem.JAR_OF_DECAY]: [],
    [EItem.DRAGONBONE_NECKLACE]: [],

    // Yama
    [EItem.YAMI]: [],
    [EItem.OATHPLATE_HELM]: [],
    [EItem.OATHPLATE_CHEST]: [],
    [EItem.OATHPLATE_LEGS]: [],
    [EItem.SOULFLAME_HORN]: [],

    // Zulrah
    [EItem.PET_SNAKELING]: [],
    [EItem.TANZANITE_MUTAGEN]: [],
    [EItem.MAGMA_MUTAGEN]: [],
    [EItem.JAR_OF_SWAMP]: [],
    [EItem.MAGIC_FANG]: [],
    [EItem.SERPENTINE_VISAGE]: [],
    [EItem.TANZANITE_FANG]: [],

    // Bosses shared
    [EItem.DRAGON_CHAINBODY__2]: [EMonster.KALPHITE_QUEEN, EMonster.THERMONUCLEAR_SMOKE_DEVIL, EMonster.CHOKE_DEVIL, EMonster.NUCLEAR_SMOKE_DEVIL, EMonster.DUST_DEVIL, EMonster.SMOKE_DEVIL],
    [EItem.DRAGON_2H_SWORD]: [EMonster.CHAOS_ELEMENTAL, EMonster.SCORPIA, EMonster.CALLISTO, EMonster.KALPHITE_QUEEN, EMonster.VENENATIS__2, EMonster.VETION, EMonster.ARTIO, EMonster.CALVARION, EMonster.SPINDEL],
    [EItem.DRAGON_PICKAXE]: [EMonster.CHAOS_ELEMENTAL, EMonster.CALLISTO__2, EMonster.KALPHITE_QUEEN, EMonster.VENENATIS__2, EMonster.VETION__2, EMonster.ARTIO, EMonster.CALVARION, EMonster.SPINDEL, EMonster.KING_BLACK_DRAGON],

    // Slayer
    [EItem.ETERNAL_GEM]: [],
    [EItem.IMBUED_HEART]: [],
    [EItem.DUST_BATTLESTAFF]: [],
    [EItem.MIST_BATTLESTAFF]: [],
    [EItem.DARK_BOW]: [],
    [EItem.BASILISK_JAW]: [],
    [EItem.WARPED_SCEPTRE_UNCHARGED]: [],
    [EItem.DAGONHAI_HAT]: [],
    [EItem.DAGONHAI_ROBE_TOP]: [],
    [EItem.DAGONHAI_ROBE_BOTTOM]: [],

    // Elder Chaos Druids
    [EItem.ELDER_CHAOS_TOP]: [],
    [EItem.ELDER_CHAOS_ROBE]: [],
    [EItem.ELDER_CHAOS_HOOD]: [],

    // Revenants
    [EItem.VIGGORAS_CHAINMACE_U]: [],
    [EItem.CRAWS_BOW_U]: [],
    [EItem.THAMMARONS_SCEPTRE_U]: [],
    [EItem.AMULET_OF_AVARICE]: [],
    [EItem.ANCIENT_RELIC]: [],
    [EItem.ANCIENT_EFFIGY]: [],
    [EItem.ANCIENT_MEDALLION]: [],
    [EItem.ANCIENT_STATUETTE]: [],
    [EItem.ANCIENT_TOTEM]: [],
    [EItem.ANCIENT_EMBLEM]: [],

    // Tormented Demons
    [EItem.TORMENTED_SYNAPSE]: [],
    [EItem.BURNING_CLAW]: [],

    // Tzhaar
    [EItem.OBSIDIAN_CAPE]: [],
    [EItem.TOKTZKETXIL]: [],
    [EItem.TZHAARKETOM]: [],
    [EItem.TOKTZXILAK]: [],
    [EItem.TOKTZXILEK]: [],
    [EItem.TOKTZMEJTAL]: [],
    [EItem.TOKTZXILUL]: [],
    [EItem.OBSIDIAN_HELMET]: [],
    [EItem.OBSIDIAN_PLATEBODY]: [],
    [EItem.OBSIDIAN_PLATELEGS]: [],

    // Misc
    [EItem.DRAGON_WARHAMMER]: [],

    [EItem.FISH_BARREL]: [],
    [EItem.DRAGON_AXE]: [],
}