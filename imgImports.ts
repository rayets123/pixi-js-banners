/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import { SHARED_DESIGN } from "@easycasino/shared/shared-config";
import { getStaticFilePath } from "@easycasino/shared/utils/getStaticFilePath";
import { geoFolder } from "@easycasino/shared/themeManager";
import { geoFolderForAssets } from "@easycasino/shared/themeManager";

interface ImgImports {
	[key: string]: string;
}

export const getImgList = (): ImgImports => {
	const folder = geoFolder();

	return {
		// currency
		ETH: getStaticFilePath(`${SHARED_DESIGN}/currency/eth.svg`, { kind: "static", type: "base" }),
		USDT: getStaticFilePath(`${SHARED_DESIGN}/currency/usdt.svg`, { kind: "static", type: "base" }),
		BTC: getStaticFilePath(`${SHARED_DESIGN}/currency/btc.svg`, { kind: "static", type: "base" }),
		LTC: getStaticFilePath(`${SHARED_DESIGN}/currency/ltc.svg`, { kind: "static", type: "base" }),
		TRX: getStaticFilePath(`${SHARED_DESIGN}/currency/trx.svg`, { kind: "static", type: "base" }),
		XRP: getStaticFilePath(`${SHARED_DESIGN}/currency/xrp.svg`, { kind: "static", type: "base" }),
		DOGE: getStaticFilePath(`${SHARED_DESIGN}/currency/doge.svg`, { kind: "static", type: "base" }),
		CAD: getStaticFilePath(`${SHARED_DESIGN}/currency/cad.svg`, { kind: "static", type: "base" }),
		CZK: getStaticFilePath(`${SHARED_DESIGN}/currency/czk.svg`, { kind: "static", type: "base" }),
		EUR: getStaticFilePath(`${SHARED_DESIGN}/currency/eur.svg`, { kind: "static", type: "base" }),
		JPY: getStaticFilePath(`${SHARED_DESIGN}/currency/jpy.svg`, { kind: "static", type: "base" }),
		KRW: getStaticFilePath(`${SHARED_DESIGN}/currency/krw.svg`, { kind: "static", type: "base" }),
		NGN: getStaticFilePath(`${SHARED_DESIGN}/currency/ngn.svg`, { kind: "static", type: "base" }),
		NOK: getStaticFilePath(`${SHARED_DESIGN}/currency/nok.svg`, { kind: "static", type: "base" }),
		NZD: getStaticFilePath(`${SHARED_DESIGN}/currency/nzd.svg`, { kind: "static", type: "base" }),
		PLN: getStaticFilePath(`${SHARED_DESIGN}/currency/pln.svg`, { kind: "static", type: "base" }),

		RUB: getStaticFilePath(`${SHARED_DESIGN}/currency/rub.svg`, { kind: "static", type: "base" }),
		TRY: getStaticFilePath(`${SHARED_DESIGN}/currency/try.svg`, { kind: "static", type: "base" }),

		//datepicker
		DatepickerArrow: getStaticFilePath(`${SHARED_DESIGN}/datepicker/datepickerArrow.svg`, {
			kind: "static",
			type: "base"
		}),
		// logo
		LOGO_IMG: getStaticFilePath(`${SHARED_DESIGN}/${folder}/logo/casino_logo.webp?v=3`, {
			kind: "static",
			type: "base"
		}),
		LOGO_IMG_WHITE: getStaticFilePath(`${SHARED_DESIGN}/${folder}/logo/casino_logo_white.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		LOGO_SYMBOL: getStaticFilePath(`${SHARED_DESIGN}/${folder}logo/casino_symbol.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		MAIN_BG: getStaticFilePath(`${SHARED_DESIGN}/${folder}background/mainBg.webp`, {
			kind: "static",
			type: "base"
		}),
		// icons
		ReloadIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/reload.svg`, { kind: "static", type: "base" }),
		BonusSwapIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/respin.svg`, { kind: "static", type: "base" }),
		NoBonusMoney: getStaticFilePath(`${SHARED_DESIGN}/icons/noBonusMoney.svg`, { kind: "static", type: "base" }),
		NoBonusMoneyV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}/icons/noBonusMoney.png`, { kind: "static", type: "base" }),
		VerifiedIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/security-verified-stroke.svg`, {
			kind: "static",
			type: "base"
		}),
		WARNING_ICON: getStaticFilePath(`${SHARED_DESIGN}/icons/warning.svg`, { kind: "static", type: "base" }),
		RedWarningTriangle: getStaticFilePath(`${SHARED_DESIGN}/icons/redWarningTriangle.svg`, {
			kind: "static",
			type: "base"
		}),
		ArrowTop: getStaticFilePath(`${SHARED_DESIGN}/arrow-top.svg`, { kind: "static", type: "base" }),
		ArrowRightIcon: getStaticFilePath(`${SHARED_DESIGN}/angle-right.svg`, { kind: "static", type: "base" }),
		ArrowIcon: getStaticFilePath(`${SHARED_DESIGN}/footer/angle-down-small.svg`, { kind: "static", type: "base" }),
		ArrowRight: getStaticFilePath(`${SHARED_DESIGN}/icons/slider-right.svg`, { kind: "static", type: "base" }),
		ArrowLeft: getStaticFilePath(`${SHARED_DESIGN}/icons/slider-left.svg`, { kind: "static", type: "base" }),
		GraySearchIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/GraySearch.svg`, { kind: "static", type: "base" }),
		SearchIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/search.svg`, { kind: "static", type: "base" }),
		SearchWebp: getStaticFilePath(`${SHARED_DESIGN}/${folder}search/search.webp`, {
			kind: "static",
			type: "base"
		}),
		MaxBetLimit: getStaticFilePath(`${SHARED_DESIGN}/${folder}games/maxBetLimit.png`, {
			kind: "static",
			type: "base"
		}),
		BONUS_ICON: getStaticFilePath(`${SHARED_DESIGN}/currency/usd_bonus.svg`, { kind: "static", type: "base" }),
		MenuIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/menu-left-alt.svg`, { kind: "static", type: "base" }),
		CloseIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/menu-close.svg`, { kind: "static", type: "base" }),
		CloseIconWhite: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/menu-close-white.svg`, {
			kind: "static",
			type: "base"
		}),
		CloseIconGrey: getStaticFilePath(`${SHARED_DESIGN}/icons/close-grey.svg`, { kind: "static", type: "base" }),
		SupportIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/support.svg`, { kind: "static", type: "base" }),
		Notification: getStaticFilePath(`${SHARED_DESIGN}/icons/notification.svg`, { kind: "static", type: "base" }),
		HourglassIcon: getStaticFilePath(`${SHARED_DESIGN}/rewards/hour_glass_icon.svg`, {
			kind: "static",
			type: "base"
		}),
		successIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/toast_success.svg`, { kind: "static", type: "base" }),
		pendingIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/toast_pending.svg`, { kind: "static", type: "base" }),
		pendingIconCircle: getStaticFilePath(`${SHARED_DESIGN}/icons/toast_pending_сircle.svg`, {
			kind: "static",
			type: "base"
		}),
		vpnIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/vpn.svg`, { kind: "static", type: "base" }),
		errorIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/toast_error.svg`, { kind: "static", type: "base" }),
		infoIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/toast_info.svg`, { kind: "static", type: "base" }),
		searchIcon: getStaticFilePath(`${SHARED_DESIGN}/search-icon.svg`, { kind: "static", type: "base" }),
		Lock: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/lock_icon.svg`, { kind: "static", type: "base" }),
		LocationIcon: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/location_pin_check.svg`, {
			kind: "static",
			type: "base"
		}),
		Envelope: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/envelope.svg`, { kind: "static", type: "base" }),
		questionIcon: getStaticFilePath(`${SHARED_DESIGN}/questions.svg`, { kind: "static", type: "base" }),
		plusIcon: getStaticFilePath(`${SHARED_DESIGN}/plus.svg`, { kind: "static", type: "base" }),
		minusIcon: getStaticFilePath(`${SHARED_DESIGN}/minus.svg`, { kind: "static", type: "base" }),
		OutlinedCheckIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/solid_circle_check.svg`, {
			kind: "static",
			type: "base"
		}),
		OutlinedErrorIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/solid_circle_error.svg`, {
			kind: "static",
			type: "base"
		}),
		PlayHover: getStaticFilePath(`${SHARED_DESIGN}/icons/play-hovered.svg`, { kind: "static", type: "base" }),
		SwapIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/Swap.svg`, { kind: "static", type: "base" }),
		IconSearch: getStaticFilePath(`${SHARED_DESIGN}/icons/IconSearch.svg`, { kind: "static", type: "base" }),
		ArrowKeyboard: getStaticFilePath(`${SHARED_DESIGN}/icons/ArrowKeyboard.svg`, { kind: "static", type: "base" }),
		ArrowRight1: getStaticFilePath(`${SHARED_DESIGN}/slots/arrow-right-1.svg`, { kind: "static", type: "base" }),
		HistorySVG: getStaticFilePath(`${SHARED_DESIGN}/HistoryIcon.svg`, { kind: "static", type: "base" }),
		copyIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/copyIcon.svg`, { kind: "static", type: "base" }),
		copyIconFilled: getStaticFilePath(`${SHARED_DESIGN}/icons/copyIconFilled.svg`, {
			kind: "static",
			type: "base"
		}),
		diamondWarning: getStaticFilePath(`${SHARED_DESIGN}/icons/diamondWarning.svg`, {
			kind: "static",
			type: "base"
		}),
		heartIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/heart.svg`, { kind: "static", type: "base" }),
		heartActiveIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/heart-active.svg`, { kind: "static", type: "base" }),
		heartGrey: getStaticFilePath(`${SHARED_DESIGN}/icons/heart-grey.svg`, { kind: "static", type: "base" }),
		info: getStaticFilePath(`${SHARED_DESIGN}/icons/info.svg`, { kind: "static", type: "base" }),
		moreHorizontal: getStaticFilePath(`${SHARED_DESIGN}/icons/more-horizontal.svg`, {
			kind: "static",
			type: "base"
		}),
		shieldGrey: getStaticFilePath(`${SHARED_DESIGN}/icons/shield.svg`, { kind: "static", type: "base" }),
		fire: getStaticFilePath(`${SHARED_DESIGN}/icons/fire.svg`, { kind: "static", type: "base" }),
		fireColored: getStaticFilePath(`${SHARED_DESIGN}/icons/fireColored.svg`, { kind: "static", type: "base" }),
		powerOff: getStaticFilePath(`${SHARED_DESIGN}/icons/power-off.svg`, { kind: "static", type: "base" }),
		BonusGiftIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/bonusGiftIcon.webp`, { kind: "static", type: "base" }),
		moneyBag: getStaticFilePath(`${SHARED_DESIGN}/icons/moneyBag.svg`, { kind: "static", type: "base" }),
		clappingHands: getStaticFilePath(`${SHARED_DESIGN}/icons/clappingHands.svg`, { kind: "static", type: "base" }),
		// payments
		ECOPAY: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/ecopay.svg`, { kind: "static", type: "base" }),
		GOOGLEPAY: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/googlepay.svg`, { kind: "static", type: "base" }),
		INTERAC: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/interac.svg`, { kind: "static", type: "base" }),
		MASTERCARD: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/mastercard.svg`, { kind: "static", type: "base" }),
		NEUOSURF: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/neosurf.svg`, { kind: "static", type: "base" }),
		PAYSAFECARD: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/paysafecard.svg`, {
			kind: "static",
			type: "base"
		}),
		QIWI: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/qiwi.svg`, { kind: "static", type: "base" }),
		REVOLUT: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/revolut.svg`, { kind: "static", type: "base" }),
		SAFETYPAY: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/safetypay.svg`, { kind: "static", type: "base" }),
		SKRILL: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/skrill.svg`, { kind: "static", type: "base" }),
		TRUSTLY: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/trustly.svg`, { kind: "static", type: "base" }),
		UNIONPAY: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/unionpay.svg`, { kind: "static", type: "base" }),
		VISA: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/visa.svg`, { kind: "static", type: "base" }),
		WEBMONEY: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/webmoney.svg`, { kind: "static", type: "base" }),
		WEBPAY: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/webpay.svg`, { kind: "static", type: "base" }),
		WEPAY: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/wepay.svg`, { kind: "static", type: "base" }),
		WESTERN: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/western.svg`, { kind: "static", type: "base" }),
		YANDEX: getStaticFilePath(`${SHARED_DESIGN}/payments/v5/yandexmoney.svg`, { kind: "static", type: "base" }),
		SecureIcon: getStaticFilePath(`${SHARED_DESIGN}/payments/wallet/secure.svg`, { kind: "static", type: "base" }),
		TopPaymentMethod: getStaticFilePath(`${SHARED_DESIGN}/payments/wallet/top.svg`, {
			kind: "static",
			type: "base"
		}),
		CountryPayment: getStaticFilePath(`${SHARED_DESIGN}/${folder}payments/wallet/country-select.webp`, {
			kind: "static",
			type: "base"
		}),
		// social
		FacebookIcon: getStaticFilePath(`${SHARED_DESIGN}/social/facebook.svg`, { kind: "static", type: "base" }),
		TwitterIcon: getStaticFilePath(`${SHARED_DESIGN}/social/twitter.svg?v=1`, { kind: "static", type: "base" }),
		InstagramIcon: getStaticFilePath(`${SHARED_DESIGN}/social/instagram.svg?v=1`, { kind: "static", type: "base" }),
		TelegramIcon: getStaticFilePath(`${SHARED_DESIGN}/social/telegram.svg?v=1`, {
			kind: "static",
			type: "base"
		}),
		TelegramChannelIcon: getStaticFilePath(`${SHARED_DESIGN}/social/telegramChannel.svg`, {
			kind: "static",
			type: "base"
		}),
		GoogleIcon: getStaticFilePath(`${SHARED_DESIGN}/social/google.svg`, { kind: "static", type: "base" }),
		YuotubeIcon: getStaticFilePath(`${SHARED_DESIGN}/social/youtube.svg`, { kind: "static", type: "base" }),
		Mail: getStaticFilePath(`${SHARED_DESIGN}/social/mail.svg`, { kind: "static", type: "base" }),

		// flags
		FlagBalkan: getStaticFilePath(`${SHARED_DESIGN}/flags/balkan.svg`, { kind: "static", type: "base" }),
		FlagFi: getStaticFilePath(`${SHARED_DESIGN}/flags/fi.svg`, { kind: "static", type: "base" }),
		FlagGb: getStaticFilePath(`${SHARED_DESIGN}/flags/gb.svg`, { kind: "static", type: "base" }),
		FlagJp: getStaticFilePath(`${SHARED_DESIGN}/flags/jp.svg`, { kind: "static", type: "base" }),
		FlagNo: getStaticFilePath(`${SHARED_DESIGN}/flags/no.svg`, { kind: "static", type: "base" }),
		FlagOther: getStaticFilePath(`${SHARED_DESIGN}/flags/global_country.svg`, { kind: "static", type: "base" }),
		FlagPl: getStaticFilePath(`${SHARED_DESIGN}/flags/pl.svg`, { kind: "static", type: "base" }),
		FlagPt: getStaticFilePath(`${SHARED_DESIGN}/flags/pt.svg`, { kind: "static", type: "base" }),
		FlagSe: getStaticFilePath(`${SHARED_DESIGN}/flags/se.svg`, { kind: "static", type: "base" }),
		FlagTr: getStaticFilePath(`${SHARED_DESIGN}/flags/tr.svg`, { kind: "static", type: "base" }),
		FlagEs: getStaticFilePath(`${SHARED_DESIGN}/flags/es.svg`, { kind: "static", type: "base" }),
		FlagFr: getStaticFilePath(`${SHARED_DESIGN}/flags/fr.svg`, { kind: "static", type: "base" }),
		FlagIn: getStaticFilePath(`${SHARED_DESIGN}/flags/in.svg`, { kind: "static", type: "base" }),
		FlagMod: getStaticFilePath(`${SHARED_DESIGN}/flags/global_country.svg`, { kind: "static", type: "base" }),
		FlagPh: getStaticFilePath(`${SHARED_DESIGN}/flags/ph.svg`, { kind: "static", type: "base" }),
		FlagPrediction: getStaticFilePath(`${SHARED_DESIGN}/flags/global_country.svg`, {
			kind: "static",
			type: "base"
		}),
		FlagRu: getStaticFilePath(`${SHARED_DESIGN}/flags/ru.svg`, { kind: "static", type: "base" }),
		FlagTrading: getStaticFilePath(`${SHARED_DESIGN}/flags/trading.svg`, { kind: "static", type: "base" }),
		GlobalIcon: getStaticFilePath(`${SHARED_DESIGN}/flags/global_country.svg`, { kind: "static", type: "base" }),
		// popup
		WelcomeAuth: getStaticFilePath(`${SHARED_DESIGN}/${folder}/popup/welcome_auth2.webp`, {
			kind: "static",
			type: "base"
		}),
		IllustrationPopup: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}popup/illustration.webp`, {
			kind: "static",
			type: "base"
		}),
		// check
		EmailIcon: getStaticFilePath(`${SHARED_DESIGN}/check_email.svg`, { kind: "static", type: "base" }),
		PhoneIcon: getStaticFilePath(`${SHARED_DESIGN}/check_phone.svg`, { kind: "static", type: "base" }),
		// footer
		GC: getStaticFilePath(`${SHARED_DESIGN}/footer/GC.webp`, { kind: "static", type: "base" }),
		anjouan: getStaticFilePath(`${SHARED_DESIGN}/footer/anjouan.webp`, { kind: "static", type: "base" }),
		// home
		// B_IMG: getStaticFilePath(`${SHARED_DESIGN}/home/b.svg`, { kind: "static", type: "base" }),
		// L_IMG: getStaticFilePath(`${SHARED_DESIGN}/home/l.svg`, { kind: "static", type: "base" }),
		// R_IMG: getStaticFilePath(`${SHARED_DESIGN}/home/ruby.svg`, { kind: "static", type: "base" }),
		// T_IMG: getStaticFilePath(`${SHARED_DESIGN}/home/t.svg`, { kind: "static", type: "base" }),
		// slots
		NoResultIcon: getStaticFilePath(`${SHARED_DESIGN}/slots/no_items.webp`, { kind: "static", type: "base" }),
		NoResultIconFav: getStaticFilePath(`${SHARED_DESIGN}/slots/no_items_fav.svg`, { kind: "static", type: "base" }),
		Conf: getStaticFilePath(`${SHARED_DESIGN}/welcome/img_confetti_flash.webp`, { kind: "static", type: "base" }),
		GoldIcon: getStaticFilePath(`${SHARED_DESIGN}/welcome/gold_bonus.webp`, { kind: "static", type: "base" }),
		bonusGift: getStaticFilePath(`${SHARED_DESIGN}/${folder}welcome/bonusGift.svg`, {
			kind: "static",
			type: "base"
		}),
		THUMBNAIL_IMG: getStaticFilePath(`${SHARED_DESIGN}/${folder}logo/game_card_bg_logo.webp`, {
			kind: "static",
			type: "base"
		}),
		// browsers
		// chrome: getStaticFilePath(`${SHARED_DESIGN}/browsers/chrome.svg`, { kind: "static", type: "base" }),
		// firefox: getStaticFilePath(`${SHARED_DESIGN}/browsers/firefox.svg`, { kind: "static", type: "base" }),
		// safari: getStaticFilePath(`${SHARED_DESIGN}/browsers/safari.svg`, { kind: "static", type: "base" }),
		// opera: getStaticFilePath(`${SHARED_DESIGN}/browsers/opera.svg`, { kind: "static", type: "base" }),
		// edge: getStaticFilePath(`${SHARED_DESIGN}/browsers/edge.svg`, { kind: "static", type: "base" }),
		// tor: getStaticFilePath(`${SHARED_DESIGN}/browsers/tor.svg`, { kind: "static", type: "base" }),
		// samsung: getStaticFilePath(`${SHARED_DESIGN}/browsers/samsung.svg`, { kind: "static", type: "base" }),
		// rewards
		ErrorWindow: getStaticFilePath(`${SHARED_DESIGN}/rewards/error-window-icon.svg`, {
			kind: "static",
			type: "base"
		}),
		RewardInstant: getStaticFilePath(`${SHARED_DESIGN}/rewards/instant_rewards_icon.svg`, {
			kind: "static",
			type: "base"
		}),
		RewardWeekly: getStaticFilePath(`${SHARED_DESIGN}/rewards/weekly_rewards_icon.svg`, {
			kind: "static",
			type: "base"
		}),
		RewardMonthly: getStaticFilePath(`${SHARED_DESIGN}/rewards/monthly_rewards_icon.svg`, {
			kind: "static",
			type: "base"
		}),
		DailySurprise: getStaticFilePath(`${SHARED_DESIGN}/rewards/daily_surprise_icon.svg`, {
			kind: "static",
			type: "base"
		}),
		Trumpet: getStaticFilePath(`${SHARED_DESIGN}/rewards/trumpet.svg`, { kind: "static", type: "base" }),
		SUPRISE_ICON_SMALL: getStaticFilePath(`${SHARED_DESIGN}/rewards/surprise_small_icon.svg`, {
			kind: "static",
			type: "base"
		}),
		GiftIcon: getStaticFilePath(`${SHARED_DESIGN}/rewards/easycasino_gift_icon.svg`, {
			kind: "static",
			type: "base"
		}),
		XIcon: getStaticFilePath(`${SHARED_DESIGN}/rewards/x_icon.svg`, { kind: "static", type: "base" }),
		RewardsItemBg: getStaticFilePath(`${SHARED_DESIGN}/rewards/rewards_item_bg.svg`, {
			kind: "static",
			type: "base"
		}),
		RoyaltyClubBackground: getStaticFilePath(`${SHARED_DESIGN}/rewards/royalty_club_bg.png`, {
			kind: "static",
			type: "base"
		}),

		// providers
		NetEntIcon: getStaticFilePath(`${SHARED_DESIGN}/providers/icons/netent.svg`, { kind: "static", type: "base" }),
		AviatrixIcon: getStaticFilePath(`${SHARED_DESIGN}/providers/icons/aviatrix.svg`, {
			kind: "static",
			type: "base"
		}),
		EvolutionIcon: getStaticFilePath(`${SHARED_DESIGN}/providers/icons/evolution_gaming.svg`, {
			kind: "static",
			type: "base"
		}),
		TigerIcon: getStaticFilePath(`${SHARED_DESIGN}/providers/icons/red_tiger.svg`, {
			kind: "static",
			type: "base"
		}),
		// BETSOFT: getStaticFilePath(`${SHARED_DESIGN}/providers/betsoft.svg`, { kind: "static", type: "base" }),
		// BGAMING: getStaticFilePath(`${SHARED_DESIGN}/providers/bgaming.svg`, { kind: "static", type: "base" }),
		// BLUEPRINT: getStaticFilePath(`${SHARED_DESIGN}/providers/blueprint.svg`, { kind: "static", type: "base" }),
		// BOOMING: getStaticFilePath(`${SHARED_DESIGN}/providers/booming.svg`, { kind: "static", type: "base" }),
		// BOONGO: getStaticFilePath(`${SHARED_DESIGN}/providers/boongo.svg`, { kind: "static", type: "base" }),
		// CALETE: getStaticFilePath(`${SHARED_DESIGN}/providers/caleta.svg`, { kind: "static", type: "base" }),
		// EGT: getStaticFilePath(`${SHARED_DESIGN}/providers/egt.svg`, { kind: "static", type: "base" }),
		// EVO: getStaticFilePath(`${SHARED_DESIGN}/providers/evo.svg`, { kind: "static", type: "base" }),
		// HACKSAW: getStaticFilePath(`${SHARED_DESIGN}/providers/hacksaw.svg`, { kind: "static", type: "base" }),
		// MICROGAMIN: getStaticFilePath(`${SHARED_DESIGN}/providers/microgaming.svg`, { kind: "static", type: "base" }),
		// NETENT: getStaticFilePath(`${SHARED_DESIGN}/providers/netent.svg`, { kind: "static", type: "base" }),
		// NOLIMIT: getStaticFilePath(`${SHARED_DESIGN}/providers/nolimit.svg`, { kind: "static", type: "base" }),
		// PLAYNGO: getStaticFilePath(`${SHARED_DESIGN}/providers/payngo.svg`, { kind: "static", type: "base" }),
		// PRAGMATIC: getStaticFilePath(`${SHARED_DESIGN}/providers/pragmatic.svg`, { kind: "static", type: "base" }),
		// PUSH_GAMING: getStaticFilePath(`${SHARED_DESIGN}/providers/pushgaming.svg`, { kind: "static", type: "base" }),
		// REDTIGER: getStaticFilePath(`${SHARED_DESIGN}/providers/quickspin.svg`, { kind: "static", type: "base" }),
		// QUICKSPIN: getStaticFilePath(`${SHARED_DESIGN}/providers/redtiger.svg`, { kind: "static", type: "base" }),
		// RELAX: getStaticFilePath(`${SHARED_DESIGN}/providers/relax.svg`, { kind: "static", type: "base" }),
		// SPINOMENAL: getStaticFilePath(`${SHARED_DESIGN}/providers/spinomenal.svg`, { kind: "static", type: "base" }),
		// TOMHORN: getStaticFilePath(`${SHARED_DESIGN}/providers/tomhorn.svg`, { kind: "static", type: "base" }),
		// YGGDRASIL: getStaticFilePath(`${SHARED_DESIGN}/providers/yggdrasil.svg`, { kind: "static", type: "base" }),
		ProviderIcon: getStaticFilePath(`${SHARED_DESIGN}/providers.svg`, { kind: "static", type: "base" }),
		// geoBlock
		GeoBlockedBackGround: getStaticFilePath(`${SHARED_DESIGN}/${folder}geoblocked/geoBlock.webp`, {
			kind: "static",
			type: "base"
		}),
		GeoBlockedBackGroundNotebook: getStaticFilePath(`${SHARED_DESIGN}/${folder}geoblocked/geoBlockNotebook.webp`, {
			kind: "static",
			type: "base"
		}),
		GeoBlockedBackGroundTablet: getStaticFilePath(`${SHARED_DESIGN}/${folder}geoblocked/geoBlockTablet.webp`, {
			kind: "static",
			type: "base"
		}),
		GeoBlockedBackGroundMobile: getStaticFilePath(`${SHARED_DESIGN}/${folder}geoblocked/geoBlockMobile.webp`, {
			kind: "static",
			type: "base"
		}),
		// upload
		Upload: getStaticFilePath(`${SHARED_DESIGN}/Upload.svg`, { kind: "static", type: "base" }),
		// 404
		Image404: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}page404/404.webp`, { kind: "static", type: "base" }),
		Image404Notebook: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}page404/404_notebook.webp`, {
			kind: "static",
			type: "base"
		}),
		Image404Tablet: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}page404/404_tablet.webp`, {
			kind: "static",
			type: "base"
		}),
		phone404: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}page404/404_phone.webp`, {
			kind: "static",
			type: "base"
		}),
		fileIcon: getStaticFilePath(`${SHARED_DESIGN}/file-icon.png`, { kind: "static", type: "base" }),
		// myGifts
		aviatorBackground: getStaticFilePath(`${SHARED_DESIGN}/${folder}myGifts/aviator.webp`, {
			kind: "static",
			type: "base"
		}),
		freeSpinsBackground: getStaticFilePath(`${SHARED_DESIGN}/${folder}myGifts/freespins.webp`, {
			kind: "static",
			type: "base"
		}),
		promocodeBackground: getStaticFilePath(`${SHARED_DESIGN}/${folder}myGifts/promocode.webp`, {
			kind: "static",
			type: "base"
		}),
		showRewardsBackground: getStaticFilePath(`${SHARED_DESIGN}/${folder}myGifts/showrewards.webp`, {
			kind: "static",
			type: "base"
		}),
		aviatorMobileBackground: getStaticFilePath(`${SHARED_DESIGN}/${folder}myGifts/aviatorMobile.webp`, {
			kind: "static",
			type: "base"
		}),
		freeSpinsMobileBackground: getStaticFilePath(`${SHARED_DESIGN}/${folder}myGifts/freespinsMobile.webp`, {
			kind: "static",
			type: "base"
		}),
		promocodeMobileBackground: getStaticFilePath(`${SHARED_DESIGN}/${folder}myGifts/promocodeMobile.webp`, {
			kind: "static",
			type: "base"
		}),
		showRewardsMobileBackground: getStaticFilePath(`${SHARED_DESIGN}/${folder}myGifts/showrewardsMobile.webp`, {
			kind: "static",
			type: "base"
		}),
		// navbar
		SlotsIcon: getStaticFilePath(`${SHARED_DESIGN}/navbar/slots.svg`, { kind: "static", type: "base" }),
		LiveGamesIcon: getStaticFilePath(`${SHARED_DESIGN}/navbar/livegames.svg`, { kind: "static", type: "base" }),
		TableGamesIcon: getStaticFilePath(`${SHARED_DESIGN}/navbar/table.svg`, { kind: "static", type: "base" }),
		BattlesIcon: getStaticFilePath(`${SHARED_DESIGN}/navbar/battles.svg`, { kind: "static", type: "base" }),
		WalletIcon: getStaticFilePath(`${SHARED_DESIGN}/navbar/wallet.svg`, { kind: "static", type: "base" }),
		ICON_RIGHT: getStaticFilePath(`${SHARED_DESIGN}/navbar/right.svg`, { kind: "static", type: "base" }),
		ICON_LEFT: getStaticFilePath(`${SHARED_DESIGN}/navbar/left.svg`, { kind: "static", type: "base" }),
		FAQIcon: getStaticFilePath(`${SHARED_DESIGN}/navbar/faq.svg`, { kind: "static", type: "base" }),
		CLOSE_IMG: getStaticFilePath(`${SHARED_DESIGN}/navbar/close.svg`, { kind: "static", type: "base" }),
		FairIcon: getStaticFilePath(`${SHARED_DESIGN}/navbar/fair.svg`, { kind: "static", type: "base" }),
		ContactIcon: getStaticFilePath(`${SHARED_DESIGN}/navbar/email.svg`, { kind: "static", type: "base" }),
		//promotions
		PromoPresentIcon: getStaticFilePath(`${SHARED_DESIGN}/${folder}promotions/present.webp`, {
			kind: "static",
			type: "base"
		}),
		PromoDiamondIcon: getStaticFilePath(`${SHARED_DESIGN}/${folder}promotions/diamond.webp`, {
			kind: "static",
			type: "base"
		}),
		ellipseImg: getStaticFilePath(`${SHARED_DESIGN}/${folder}promotions/ellipse.svg`, {
			kind: "static",
			type: "base"
		}),
		freespinPresent: getStaticFilePath(`${SHARED_DESIGN}/${folder}promotions/freespinPresent.webp`, {
			kind: "static",
			type: "base"
		}),
		promocodeBag: getStaticFilePath(`${SHARED_DESIGN}/${folder}promotions/promocodeBag.webp`, {
			kind: "static",
			type: "base"
		}),
		lockImg: getStaticFilePath(`${SHARED_DESIGN}/${folder}promotions/lock.svg`, {
			kind: "static",
			type: "base"
		}),
		promoLogo: getStaticFilePath(`${SHARED_DESIGN}/${folder}promotions/promoLogo.webp`, {
			kind: "static",
			type: "base"
		}),
		freespinCherry: getStaticFilePath(`${SHARED_DESIGN}/${folder}promotions/freespinCherry.svg`, {
			kind: "static",
			type: "base"
		}),
		// other
		ICON_LINK: getStaticFilePath(`${SHARED_DESIGN}/linkChain.svg`, { kind: "static", type: "base" }),
		categoriesCharset: getStaticFilePath(`${SHARED_DESIGN}/iconCategoriesCharset.svg`, {
			kind: "static",
			type: "base"
		}),
		Check_Bonus: getStaticFilePath(`${SHARED_DESIGN}/icons/check.svg`, { kind: "static", type: "base" }),
		Deposit_Bonus: getStaticFilePath(`${SHARED_DESIGN}/statistics/deposit_bonus.svg`, {
			kind: "static",
			type: "base"
		}),
		FolderStar: getStaticFilePath(`${SHARED_DESIGN}/FolderStar.svg`, { kind: "static", type: "base" }),
		EmptyStateIcon: getStaticFilePath(`${SHARED_DESIGN}/empty-state.webp`, { kind: "static", type: "base" }),
		ErrorIcon: getStaticFilePath(`${SHARED_DESIGN}/ErrorIcon.svg`, { kind: "static", type: "base" }),
		CARDS_ICON: getStaticFilePath(`${SHARED_DESIGN}/statistics/cards_1.svg`, { kind: "static", type: "base" }),
		PRIVATE_ICON: getStaticFilePath(`${SHARED_DESIGN}/statistics/private.svg`, { kind: "static", type: "base" }),
		WAGER_ICON: getStaticFilePath(`${SHARED_DESIGN}/statistics/wager_1.svg`, { kind: "static", type: "base" }),
		WINNINGS_ICON: getStaticFilePath(`${SHARED_DESIGN}/statistics/winnings_1.svg`, {
			kind: "static",
			type: "base"
		}),
		SUPRISE_ICON: getStaticFilePath(`${SHARED_DESIGN}/statistics/surprise.svg`, { kind: "static", type: "base" }),
		SmallArrow: getStaticFilePath(`${SHARED_DESIGN}/arrow-right-small.svg`, { kind: "static", type: "base" }),
		RejectIcon: getStaticFilePath(`${SHARED_DESIGN}/rejectRed.svg`, { kind: "static", type: "base" }),
		SuccessIcon: getStaticFilePath(`${SHARED_DESIGN}/successGreen.svg`, { kind: "static", type: "base" }),
		WaitingIcon: getStaticFilePath(`${SHARED_DESIGN}/waitingOrange.svg`, { kind: "static", type: "base" }),
		HelpChatIcon: getStaticFilePath(`${SHARED_DESIGN}/HelpChatIcon.svg`, { kind: "static", type: "base" }),
		MessageIcon: getStaticFilePath(`${SHARED_DESIGN}/MessageIcon.svg`, { kind: "static", type: "base" }),
		HelpChatIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}/icons/Chat.svg`, {
			kind: "static",
			type: "base"
		}),
		MessageIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}/icons/Mail.svg`, { kind: "static", type: "base" }),
		PickRandom: getStaticFilePath(`${SHARED_DESIGN}/icons/random.svg`, { kind: "static", type: "base" }),
		SortIcon: getStaticFilePath(`${SHARED_DESIGN}/sort.svg`, { kind: "static", type: "base" }),
		AviatrixPromocode: getStaticFilePath(`${SHARED_DESIGN}/popup/aviatrixPromocode.webp`, {
			kind: "static",
			type: "base"
		}),
		//loyalty
		bgXL: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/1920.webp`, { kind: "static", type: "base" }),
		bgLG: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/1680.webp`, { kind: "static", type: "base" }),
		bgDesktop: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/1400.webp`, {
			kind: "static",
			type: "base"
		}),
		bgMD: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/1200.webp`, { kind: "static", type: "base" }),

		LoyaltyGirl: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/girl.png`, {
			kind: "static",
			type: "base"
		}),
		LoyaltyGirlMob: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/girlMob.png`, {
			kind: "static",
			type: "base"
		}),
		LoyaltyGirlLogout: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/girlLogout.png`, {
			kind: "static",
			type: "base"
		}),
		LoyaltyCashback: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/cashback.png`, {
			kind: "static",
			type: "base"
		}),
		Level1: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level1.svg`, { kind: "static", type: "base" }),
		Level2: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level2.svg`, { kind: "static", type: "base" }),
		Level3: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level3.svg`, { kind: "static", type: "base" }),
		Level4: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level4.svg`, { kind: "static", type: "base" }),
		Level5: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level5.svg`, { kind: "static", type: "base" }),
		Level6: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level6.svg`, { kind: "static", type: "base" }),
		Level7: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level7.svg`, { kind: "static", type: "base" }),
		Level8: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level8.svg`, { kind: "static", type: "base" }),
		Level9: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level9.svg`, { kind: "static", type: "base" }),
		Level10: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level10.svg`, {
			kind: "static",
			type: "base"
		}),
		Level11: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level11.svg`, {
			kind: "static",
			type: "base"
		}),
		Level12: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level12.svg`, {
			kind: "static",
			type: "base"
		}),
		Level13: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level13.svg`, {
			kind: "static",
			type: "base"
		}),
		Level14: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level14.svg`, {
			kind: "static",
			type: "base"
		}),
		Level15: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level15.svg`, {
			kind: "static",
			type: "base"
		}),
		Level16: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level16.svg`, {
			kind: "static",
			type: "base"
		}),
		Level17: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/level17.svg`, {
			kind: "static",
			type: "base"
		}),
		point: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/point.webp`, {
			kind: "static",
			type: "base"
		}),
		activePoint: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/active.webp`, {
			kind: "static",
			type: "base"
		}),
		//categories
		TopIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/top.svg`, { kind: "static", type: "base" }),
		LiveIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/live.svg`, { kind: "static", type: "base" }),
		NewIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/new.svg`, { kind: "static", type: "base" }),
		WinIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/win.svg`, { kind: "static", type: "base" }),
		CrashesIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/crashes.svg`, { kind: "static", type: "base" }),
		BonusIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/bonus.svg`, { kind: "static", type: "base" }),
		GameIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/game.svg`, { kind: "static", type: "base" }),
		ProvidersIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/providers.svg`, { kind: "static", type: "base" }),
		CollectionsIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/collections.svg`, { kind: "static", type: "base" }),
		FavoriteIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/favorite.svg`, { kind: "static", type: "base" }),

		JackpotIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/jackpot.svg`, { kind: "static", type: "base" }),
		AllIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/all.svg`, { kind: "static", type: "base" }),
		RouletteIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/roulette.svg`, { kind: "static", type: "base" }),
		BlackjackIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/blackjack.svg`, { kind: "static", type: "base" }),
		BaccaratIcon: getStaticFilePath(`${SHARED_DESIGN}/icons/baccarat.svg`, { kind: "static", type: "base" }),

		// daily tasks
		reward: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/reward.webp`, {
			kind: "static",
			type: "base"
		}),
		claimReward: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/claim-reward.svg`, {
			kind: "static",
			type: "base"
		}),
		claimRewardBg: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/claim-reward-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksBgLeft: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/bg-left.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksBgRight: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/bg-right.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard1: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/card1.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard2: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/card2.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard3: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/card3.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard4: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/card4.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard5: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/card5.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard6: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/card6.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard7: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/card7.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard8: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/card8.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard_Super_Hot_Chilli: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/cards/super_hot_chilli.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksCard_Sun_Of_Fortune: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/cards/sun_of_fortune.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksCard_Sweet_Bonanza: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/cards/sweet_bonanza.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksCard_Coin_Strike_Hold_And_Win: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/cards/coin_strike_hold_and_win.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksCard_Duel_At_Dawn: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/cards/duel_at_dawn.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksCard_Gates_of_Olympus: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/cards/gates_of_olympus.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksCard_Merge_Up: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/merge_up.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCard_Elvis_Frog_TRUEWAYS: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/cards/elvis_frog.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksCard_Coin_Volcano: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/cards/coin_volcano.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksCard_Hot_Burning_Wins: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/cards/hot_burning_wins.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksCard_Default: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/cards/default.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCardElipse: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/card-elipse.svg`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCardElipse2: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/card-elipse-2.svg`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksCardBorder: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/border.svg`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksChecked: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/check.svg`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksBanner: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/banner.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksBannerMobile: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/banner-mobile.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksBannerMobileSmall: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}daily-tasks/banner-mobile-small.webp`,
			{
				kind: "static",
				type: "base"
			}
		),
		dailyTasksBgLeftMobile: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/bg-left-mobile.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksBgRightMobile: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/bg-right-mobile.webp`, {
			kind: "static",
			type: "base"
		}),
		dailyTasksBgRightSmall: getStaticFilePath(`${SHARED_DESIGN}/${folder}daily-tasks/bg-right-small.webp`, {
			kind: "static",
			type: "base"
		}),
		GameLoader: getStaticFilePath(`${SHARED_DESIGN}/loader.svg`, { kind: "static", type: "base" }),

		// Collections
		"bonus-features": getStaticFilePath(`${SHARED_DESIGN}/collections/bonus-features.webp`, {
			kind: "static",
			type: "base"
		}),
		"bonus-features-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/bonus-features-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"in-game-free-spins": getStaticFilePath(`${SHARED_DESIGN}/collections/in-game-free-spins.webp`, {
			kind: "static",
			type: "base"
		}),
		"in-game-free-spins-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/in-game-free-spins-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"progressive-jackpot": getStaticFilePath(`${SHARED_DESIGN}/collections/progressive-jackpot.webp`, {
			kind: "static",
			type: "base"
		}),
		"progressive-jackpot-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/progressive-jackpot-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"provably-fair": getStaticFilePath(`${SHARED_DESIGN}/collections/provably-fair.webp`, {
			kind: "static",
			type: "base"
		}),
		"provably-fair-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/provably-fair-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"buy-feature": getStaticFilePath(`${SHARED_DESIGN}/collections/buy-feature.webp`, {
			kind: "static",
			type: "base"
		}),
		"buy-feature-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/buy-feature-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"jackpot-games": getStaticFilePath(`${SHARED_DESIGN}/collections/jackpot-games.webp`, {
			kind: "static",
			type: "base"
		}),
		"jackpot-games-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/jackpot-games-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		respins: getStaticFilePath(`${SHARED_DESIGN}/collections/respins.webp`, { kind: "static", type: "base" }),
		"respins-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/respins-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"level-up-mechanics": getStaticFilePath(`${SHARED_DESIGN}/collections/level-up-mechanics.webp`, {
			kind: "static",
			type: "base"
		}),
		"level-up-mechanics-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/level-up-mechanics-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"fishing-games": getStaticFilePath(`${SHARED_DESIGN}/collections/fishing-games.webp`, {
			kind: "static",
			type: "base"
		}),
		"fishing-games-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/fishing-games-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"megaways-slots": getStaticFilePath(`${SHARED_DESIGN}/collections/megaways-slots.webp`, {
			kind: "static",
			type: "base"
		}),
		"megaways-slots-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/megaways-slots-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"classic-slots": getStaticFilePath(`${SHARED_DESIGN}/collections/classic-slots.webp`, {
			kind: "static",
			type: "base"
		}),
		"classic-slots-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/classic-slots-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"valentine-day": getStaticFilePath(`${SHARED_DESIGN}/collections/valentine-day.webp`, {
			kind: "static",
			type: "base"
		}),
		"valentine-day-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/valentine-day-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"western-theme": getStaticFilePath(`${SHARED_DESIGN}/collections/western-theme.webp`, {
			kind: "static",
			type: "base"
		}),
		"western-theme-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/western-theme-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"fruit-slots": getStaticFilePath(`${SHARED_DESIGN}/collections/fruit-slots.webp`, {
			kind: "static",
			type: "base"
		}),
		"fruit-slots-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/fruit-slots-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"sweet-candy-slots": getStaticFilePath(`${SHARED_DESIGN}/collections/sweet-candy-slots.webp`, {
			kind: "static",
			type: "base"
		}),
		"sweet-candy-slots-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/sweet-candy-slots-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"aztec-treasure": getStaticFilePath(`${SHARED_DESIGN}/collections/aztec-treasure.webp`, {
			kind: "static",
			type: "base"
		}),
		"aztec-treasure-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/aztec-treasure-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"new-year-celebration": getStaticFilePath(`${SHARED_DESIGN}/collections/new-year-celebration.webp`, {
			kind: "static",
			type: "base"
		}),
		"new-year-celebration-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/new-year-celebration-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"ancient-egypt": getStaticFilePath(`${SHARED_DESIGN}/collections/ancient-egypt.webp`, {
			kind: "static",
			type: "base"
		}),
		"ancient-egypt-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/ancient-egypt-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"halloween-specials": getStaticFilePath(`${SHARED_DESIGN}/collections/halloween-specials.webp`, {
			kind: "static",
			type: "base"
		}),
		"halloween-specials-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/halloween-specials-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"irish-luck": getStaticFilePath(`${SHARED_DESIGN}/collections/irish-luck.webp`, {
			kind: "static",
			type: "base"
		}),
		"irish-luck-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/irish-luck-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"fantasy-adventures": getStaticFilePath(`${SHARED_DESIGN}/collections/fantasy-adventures.webp`, {
			kind: "static",
			type: "base"
		}),
		"fantasy-adventures-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/fantasy-adventures-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"mythology-slots": getStaticFilePath(`${SHARED_DESIGN}/collections/mythology-slots.webp`, {
			kind: "static",
			type: "base"
		}),
		"mythology-slots-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/mythology-slots-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"branded-games": getStaticFilePath(`${SHARED_DESIGN}/collections/branded-games.webp`, {
			kind: "static",
			type: "base"
		}),
		"branded-games-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/branded-games-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"space-theme": getStaticFilePath(`${SHARED_DESIGN}/collections/space-theme.webp`, {
			kind: "static",
			type: "base"
		}),
		"space-theme-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/space-theme-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"book-of-style": getStaticFilePath(`${SHARED_DESIGN}/collections/book-of-style.webp`, {
			kind: "static",
			type: "base"
		}),
		"book-of-style-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/book-of-style-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"asian-theme": getStaticFilePath(`${SHARED_DESIGN}/collections/asian-theme.webp`, {
			kind: "static",
			type: "base"
		}),
		"asian-theme-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/asian-theme-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"animal-world": getStaticFilePath(`${SHARED_DESIGN}/collections/animal-world.webp`, {
			kind: "static",
			type: "base"
		}),
		"animal-world-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/animal-world-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"fire-and-lava": getStaticFilePath(`${SHARED_DESIGN}/collections/fire-and-lava.webp`, {
			kind: "static",
			type: "base"
		}),
		"fire-and-lava-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/fire-and-lava-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"treasure-hunt": getStaticFilePath(`${SHARED_DESIGN}/collections/treasure-hunt.webp`, {
			kind: "static",
			type: "base"
		}),
		"treasure-hunt-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/treasure-hunt-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"luxury-life": getStaticFilePath(`${SHARED_DESIGN}/collections/luxury-life.webp`, {
			kind: "static",
			type: "base"
		}),
		"luxury-life-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/luxury-life-bg.webp`, {
			kind: "static",
			type: "base"
		}),
		"country-theme": getStaticFilePath(`${SHARED_DESIGN}/collections/country-theme.webp`, {
			kind: "static",
			type: "base"
		}),
		"country-theme-bg": getStaticFilePath(`${SHARED_DESIGN}/collections/country-theme-bg.webp`, {
			kind: "static",
			type: "base"
		}),

		//intall pwa
		PwaInstall: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/pwa.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaHeaderXL: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/1920.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaHeaderMobile: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/375.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaShadow: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/shadow.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaShadowSM: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/shadow-768.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaIphoneStep1: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/iphone-step-1.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaIphoneStep2: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/iphone-step-2.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaIphoneStep3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/iphone-step-3.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaAndroidStep1: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/android-step-1.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaAndroidStep2: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/android-step-2.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaAndroidStep3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/android-step-3.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaWrapperXLV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/header-wrapper-xl.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaHeaderXLV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/header-xl.png?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaHeaderMobileV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/header-mobile.png?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaShadowV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/shadow.png?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaShadowSMV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/shadow-sm.png?v=1`, {
			kind: "static",
			type: "base"
		}),
		PwaIphoneStep1V3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/iphone-step-1.png?v=2`, {
			kind: "static",
			type: "base"
		}),
		PwaIphoneStep2V3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/iphone-step-2.png?v=2`, {
			kind: "static",
			type: "base"
		}),
		PwaIphoneStep3V3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/iphone-step-3.png?v=2`, {
			kind: "static",
			type: "base"
		}),
		PwaAndroidStep1V3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/android-step-1.png?v=2`, {
			kind: "static",
			type: "base"
		}),
		PwaAndroidStep2V3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/android-step-2.png?v=2`, {
			kind: "static",
			type: "base"
		}),
		PwaAndroidStep3V3: getStaticFilePath(`${SHARED_DESIGN}/${folder}pwa/android-step-3.png?v=2`, {
			kind: "static",
			type: "base"
		}),
		realMoney: getStaticFilePath(`${SHARED_DESIGN}/icons/realMoney.webp`, { kind: "static", type: "base" }),

		//v3
		plusIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/plus.svg`, {
			kind: "static",
			type: "base"
		}),
		AuthCharacter: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}register/auth_form.webp`, {
			kind: "static",
			type: "base"
		}),
		headsetIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/headset.svg`, {
			kind: "static",
			type: "base"
		}),
		notifyButtonActiveV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/notify-active.svg`, {
			kind: "static",
			type: "base"
		}),
		notifyButtonV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/notify.svg`, {
			kind: "static",
			type: "base"
		}),
		userIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/user.svg`, {
			kind: "static",
			type: "base"
		}),
		userIconV3Big: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/user-big.png`, {
			kind: "static",
			type: "base"
		}),
		FooterCharacterV3: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}footer/character.webp`, {
			kind: "static",
			type: "base"
		}),
		FooterChipsV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}footer/chips-pattern.png`, {
			kind: "static",
			type: "base"
		}),
		PhoneVerificationCharacter: getStaticFilePath(`${SHARED_DESIGN}/${folder}register/phone_verify.png`, {
			kind: "static",
			type: "base"
		}),
		EmmailVerificationCharacter: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}register/email_verify.webp`, {
			kind: "static",
			type: "base"
		}),
		LoyaltyChipsV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}loyalty/chips-pattern.png`, {
			kind: "static",
			type: "base"
		}),
		PaymentCharacterV3: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}payments/wallet/character.webp?v=1`, {
			kind: "static",
			type: "base"
		}),
		PromoGiftBoxV3: getStaticFilePath(`${SHARED_DESIGN}/${geoFolderForAssets()}promotions/promo_input_illustration.webp?v=3`, {
			kind: "static",
			type: "base"
		}),
		PromoCashbackGiftV3: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}promotions/promo_cashback_illustration.png?v=1`,
			{
				kind: "static",
				type: "base"
			}
		),
		PromoFreeSpinsGiftV3: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}promotions/promo_free_spins_illustration.png`,
			{
				kind: "static",
				type: "base"
			}
		),
		PromoBonusGiftV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}promotions/promo_bonus_illustration.png`, {
			kind: "static",
			type: "base"
		}),
		notificationPromoIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/notification-promo.png`, {
			kind: "static",
			type: "base"
		}),
		notificationBonusIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/notification-bonus.png`, {
			kind: "static",
			type: "base"
		}),
		notificationCashbackIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/notification-cashback.png`, {
			kind: "static",
			type: "base"
		}),
		notificationSystemIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/notification-system.png`, {
			kind: "static",
			type: "base"
		}),
		notificationTimeIconV3: getStaticFilePath(`${SHARED_DESIGN}/${folder}icons/notification-time.png`, {
			kind: "static",
			type: "base"
		}),
		notificationWithdrawalSuccessIconV3: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}icons/notification-withdrawal-success.png`,
			{
				kind: "static",
				type: "base"
			}
		),
		notificationWithdrawalFailedIconV3: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}icons/notification-withdrawal-failed.png`,
			{
				kind: "static",
				type: "base"
			}
		),
		notificationKYCVerifiedIconV3: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}icons/notification-kyc-verified.png`,
			{
				kind: "static",
				type: "base"
			}
		),
		notificationKYCRejectedIconV3: getStaticFilePath(
			`${SHARED_DESIGN}/${folder}icons/notification-kyc-rejected.png`,
			{
				kind: "static",
				type: "base"
			}
		),
		SportBettingIcon: getStaticFilePath(`${SHARED_DESIGN}/${folder}catagories/sport.png`, {
			kind: "static",
			type: "base"
		}),
		SportOnlineIcon: getStaticFilePath(`${SHARED_DESIGN}/${folder}catagories/sport-online.png`, {
			kind: "static",
			type: "base"
		}),
		CasinoIcon: getStaticFilePath(`${SHARED_DESIGN}/${folder}catagories/slots.png`, {
			kind: "static",
			type: "base"
		}),
		LiveCasinoIcon: getStaticFilePath(`${SHARED_DESIGN}/${folder}catagories/live.png`, {
			kind: "static",
			type: "base"
		}),
		AllGamesIcon: getStaticFilePath(`${SHARED_DESIGN}/${folder}catagories/games.png`, {
			kind: "static",
			type: "base"
		}),
		PromoIcon: getStaticFilePath(`${SHARED_DESIGN}/${folder}catagories/promotions.png`, {
			kind: "static",
			type: "base"
		})
	};
};
export default getImgList;
