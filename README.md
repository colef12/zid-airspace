# ZID Airspace Visualizer

Interactive map of Indianapolis ARTCC (ZID) sectors. Live at **https://colef12.github.io/zid-airspace/**

## Views
| Key | View | Shows |
|---|---|---|
| 1 | LOW | 16 LO sectors, FL230 & below |
| 2 | HIGH | 11 HI sectors, FL240 to FL290–340 |
| 3 | IM | 6 intermediate sectors (Areas 3, 4, 5, 7) |
| 4 | SUPER HI | 10 SH sectors, FL340+ |
| 5 | BY ALT | Owning sector at any flight level (slider) |

Colors are by Area of Specialization (1–7). Hover for ID/freq, click for full details (altitudes, VHF/UHF, callsign, FPAs, stack). URL hash keeps the view (`#hi`, `#alt/330`).

## Data
- **Sector info** (name, ID, number, altitudes, freqs, FPAs, area): ZID Order 7210.1H (7/11/2024), Ch. 4–10. VHF freqs are from CRC where present (full 25 kHz precision).
- **LO/HI boundaries**: CRC `ZID.json` ERAM video maps *Filter 1 – Low Sectors* / *Filter 11 – High Sectors*, polygonized. Labels cross-checked against every CRC event-split group (all pass).
- **TRACONs** (IND, HUF, SDF, CVG, LEX, CMH, CRW, HTS): CRC TRACON boundary maps, reduced to outer outlines.
- **IM/SH boundaries**: CRC has no IM/SH maps. Footprints are drawn as the HI sector(s) beneath them per SOP stack relationships, and are flagged as inferred in the UI. KNG 80 / IND 89 split the RSH 75 footprint along the SOP Appendix G line (N40°00' W087°16'07" – N39°00' W086°30').
- **Adjacent ARTCC stubs** (ZAU, ZOB, ZDC, ZTL, ZME, ZKC): 53 sectors from eATS facility files (`Fac-Z??-BDRY.txt`): sector numbers, strata, flight levels and boundaries. Drawn as ~25 nm stubs off the ZID boundary. VHF from CRC positions, then the ZID ALT FREQ list, then eATS; UHF from the ZID ALT FREQ list. Each view shows the neighbor sector owning a representative level (LOW FL180, HIGH FL280, IM FL320, SH FL380; BY ALT uses the slider).
- **SIDs/STARs**: 58 procedures (25 SIDs, 33 STARs) at ZID airports (KCVG, KIND, KSDF, KCMH, KDAY, KOSU, KMQJ, KTYQ, KUMP) from eATS `Airways.txt`, with fixes from `Fixes.txt`. eATS placeholder procedures (RV/RNAV/ILS) are excluded. Filter by airport or procedure; fix names appear when one procedure is selected or when zoomed in.
- **Airports**: all 105 airports that eATS `Fixes.txt` assigns to ZID; hover for name and elevation.

Not for real-world navigation.
