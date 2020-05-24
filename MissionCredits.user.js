// ==UserScript==
// @name         Missioncredits
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  NL versie van credits in meldingenlijst met dank aan itsDreyter voor de originele Duitse versie.
// @author       itsDreyter / JRH1997
// @match        https://www.meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // array with credits..
    var aCredits = [
     /* 0 */ 110, /* 1 */ 170, /* 2 */ 370, /* 3 */ 340, /* 4 */ 200, /* 5 */ 1400, /* 6 */ 600, /* 7 */ 210, /* 8 */ 220, /* 9 */ 250, /* 10 */ 600, /* 11 */ 240, /* 12 */ 310, /* 13 */ 980, /* 14 */ 1000, /* 15 */ 500, /* 16 */ 1100, /* 17 */ 340, /* 18 */ 700, /* 19 */ 650, /* 20 */ 1800, /* 21 */ 2400, /* 22 */ 2700, /* 23 */ 1200, /* 24 */ 900, /* 25 */ 1000, /* 26 */ 3510, /* 27 */ 'NIET GEVONDEN', /* 28 */ 1600, /* 29 */ 2470, /* 30 */ 190, /* 31 */ 400, /* 32 */ 1310, /* 33 */ 1200, /* 34 */ 2100, /* 35 */ 2510, /* 36 */ 3110, /* 37 */ 110, /* 38 */ 110, /* 39 */ 110, /* 40 */ 110, /* 41 */ 10000, /* 42 */ 3720, /* 43 */ 10000, /* 44 */ 170, /* 45 */ 0, /* 46 */ 0, /* 47 */ 0, /* 48 */ 0, /* 49 */ 0, /* 50 */ 0, /* 51 */ 0, /* 52 */ 1800, /* 53 */ 1700, /* 54 */ 230, /* 55 */ 1000, /* 56 */ 3100, /* 57 */ 210, /* 58 */ 250, /* 59 */ 15000, /* 60 */ 800, /* 61 */ 500, /* 62 */ 2000, /* 63 */ 500, /* 64 */ 700, /* 65 */ 310, /* 66 */ 310, /* 67 */ 320, /* 68 */ 350, /* 69 */ 1000, /* 70 */ 200, /* 71 */ 200, /* 72 */ 200, /* 73 */ 200, /* 74 */ 500, /* 75 */ 300, /* 76 */ 3000, /* 77 */ 2000, /* 78 */ 350, /* 79 */ 0, /* 80 */ 0, /* 81 */ 200, /* 82 */ 1000, /* 83 */ 0, /* 84 */ 0, /* 85 */ 300, /* 86 */ 1000, /* 87 */ 0, /* 88 */ 0, /* 89 */ 0, /* 90 */ 0, /* 91 */ 0, /* 92 */ 0, /* 93 */ 0, /* 94 */ 0, /* 95 */ 0, /* 96 */ 0, /* 97 */ 0, /* 98 */ 600, /* 99 */ 550, /* 100 */ 1200, /* 101 */ 1200, /* 102 */ 1200, /* 103 */ 2400, /* 104 */ 130, /* 105 */ 140, /* 106 */ 140, /* 107 */ 540, /* 108 */ 1240, /* 109 */ 740, /* 110 */ 500, /* 111 */ 1500, /* 112 */ 400, /* 113 */ 1000, /* 114 */ 1000, /* 115 */ 1400, /* 116 */ 3000, /* 117 */ 6000, /* 118 */ 3700, /* 119 */ 2000, /* 120 */ 4000, /* 121 */ 1000, /* 122 */ 4000, /* 123 */ 4000, /* 124 */ 4000, /* 125 */ 'NIET GEVONDEN', /* 126 */ 600, /* 127 */ 2100, /* 128 */ 400, /* 129 */ 1950, /* 130 */ 1400, /* 131 */ 1700, /* 132 */ 500, /* 133 */ 400, /* 134 */ 240, /* 135 */ 300, /* 136 */ 240, /* 137 */ 0, /* 138 */ 170, /* 139 */ 110, /* 140 */ 400, /* 141 */ 1000, /* 142 */ 1750, /* 143 */ 4000, /* 144 */ 8000, /* 145 */ 22500, /* 146 */ 'NIET GEVONDEN', /* 147 */ 'NIET GEVONDEN', /* 148 */ 'NIET GEVONDEN', /* 149 */ 'NIET GEVONDEN', /* 150 */ 'NIET GEVONDEN', /* 151 */ 'NIET GEVONDEN', /* 152 */ 'NIET GEVONDEN', /* 153 */ 'NIET GEVONDEN', /* 154 */ 'NIET GEVONDEN', /* 155 */ 890, /* 156 */ 1100, /* 157 */ 3570, /* 158 */ 350, /* 159 */ 1500, /* 160 */ 'NIET GEVONDEN', /* 161 */ 'NIET GEVONDEN', /* 162 */ 'NIET GEVONDEN', /* 163 */ 'NIET GEVONDEN', /* 164 */ 'NIET GEVONDEN', /* 165 */ 'NIET GEVONDEN', /* 166 */ 'NIET GEVONDEN', /* 167 */ 'NIET GEVONDEN', /* 168 */ 'NIET GEVONDEN', /* 169 */ 'NIET GEVONDEN', /* 170 */ 'NIET GEVONDEN', /* 171 */ 'NIET GEVONDEN', /* 172 */ 'NIET GEVONDEN', /* 173 */ 'NIET GEVONDEN', /* 174 */ 'NIET GEVONDEN', /* 175 */ 'NIET GEVONDEN', /* 176 */ 'NIET GEVONDEN', /* 177 */ 'NIET GEVONDEN', /* 178 */ 'NIET GEVONDEN', /* 179 */ 'NIET GEVONDEN', /* 180 */ 1000, /* 181 */ 1600, /* 182 */ 1400, /* 183 */ 1200, /* 184 */ 400, /* 185 */ 1200, /* 186 */ 490, /* 187 */ 390, /* 188 */ 310, /* 189 */ 330, /* 190 */ 490, /* 191 */ 420, /* 192 */ 490, /* 193 */ 140, /* 194 */ 190, /* 195 */ 420, /* 196 */ 190, /* 197 */ 190, /* 198 */ 190, /* 199 */ 800, /* 200 */ 800, /* 201 */ 850, /* 202 */ 1500, /* 203 */ 1000, /* 204 */ 1600, /* 205 */ 850, /* 206 */ 1100, /* 207 */ 900, /* 208 */ 1200, /* 209 */ 1100, /* 210 */ 1500, /* 211 */ 2000, /* 212 */ 900, /* 213 */ 1100, /* 214 */ 750, /* 215 */ 800, /* 216 */ 999, /* 217 */ 620, /* 218 */ 1100, /* 219 */ 2000, /* 220 */ 3000, /* 221 */ 800, /* 222 */ 1000, /* 223 */ 700, /* 224 */ 500, /* 225 */ 0, /* 226 */ 0, /* 227 */ 750, /* 228 */ 750, /* 229 */ 1700, /* 230 */ 0, /* 231 */ 800, /* 232 */ 800, /* 233 */ 900, /* 234 */ 11500, /* 235 */ 400, /* 236 */ 1500, /* 237 */ 780, /* 238 */ 450, /* 239 */ 0, /* 240 */ 0, /* 241 */ 1150, /* 242 */ 900, /* 243 */ 750, /* 244 */ 0, /* 245 */ 3500, /* 246 */ 600, /* 247 */ 1200, /* 248 */ 2200, /* 249 */ 2700, /* 250 */ 300, /* 251 */ 1000, /* 252 */ 1300, /* 253 */ 'NIET GEVONDEN', /* 254 */ 650, /* 255 */ 1700, /* 256 */ 400, /* 257 */ 500, /* 258 */ 250, /* 259 */ 1050, /* 260 */ 220, /* 261 */ 0, /* 262 */ 430, /* 263 */ 300, /* 264 */ 650, /* 265 */ 1550, /* 266 */ 1550, /* 267 */ 1550, /* 268 */ 2600, /* 269 */ 2700, /* 270 */ 1800, /* 271 */ 1125, /* 272 */ 1100, /* 273 */ 2100, /* 274 */ 3000, /* 275 */ 1650, /* 276 */ 2500, /* 277 */ 0, /* 278 */ 0, /* 279 */ 750, /* 280 */ 850, /* 281 */ 2700, /* 282 */ 3620, /* 283 */ 0, /* 284 */ 500, /* 285 */ 1400, /* 286 */ 340, /* 287 */ 350, /* 288 */ 1750, /* 289 */ 2150, /* 290 */ 3000, /* 291 */ 4200, /* 292 */ 1575, /* 293 */ 2450, /* 294 */ 550, /* 295 */ 450, /* 296 */ 900, /* 297 */ 1500, /* 298 */ 2200, /* 299 */ 900, /* 300 */ 1450, /* 301 */ 750, /* 302 */ 850, /* 303 */ 1650, /* 304 */ 2400, /* 305 */ 1450, /* 306 */ 2100, /* 307 */ 3250, /* 308 */ 11500, /* 309 */ 18750, /* 310 */ 750, /* 311 */ 650, /* 312 */ 4000, /* 313 */ 1000, /* 314 */ 2100, /* 315 */ 3250, /* 316 */ 1100, /* 317 */ 2000, /* 318 */ 1450, /* 319 */ 3100, /* 320 */ 4750, /* 321 */ 300, /* 322 */ 1000, /* 323 */ 750, /* 324 */ 900, /* 325 */ 1100, /* 326 */ 3650, /* 327 */ 7000, /* 328 */ 700, /* 329 */ 350, /* 330 */ 2250, /* 331 */ 1500, /* 332 */ 1500, /* 333 */ 2000, /* 334 */ 850, /* 335 */ 1750, /* 336 */ 2850, /* 337 */ 1000, /* 338 */ 1550, /* 339 */ 1150, /* 340 */ 2500, /* 341 */ 500, /* 342 */ 500, /* 343 */ 500, /* 344 */ 1375, /* 345 */ 2850, /* 346 */ 18500, /* 347 */ 17500, /* 348 */ 1750, /* 349 */ 3150, /* 350 */ 2350, /* 351 */ 1500, /* 352 */ 1400, /* 353 */ 3300, /* 354 */ 5150, /* 355 */ 3000, /* 356 */ 7200, /* 357 */ 22500, /* 358 */ 0, /* 359 */ 0, /* 360 */ 300, /* 361 */ 1150, /* 362 */ 2350, /* 363 */ 1450, /* 364 */ 3250, /* 365 */ 4800, /* 366 */ 550, /* 367 */ 400, /* 368 */ 1000, /* 369 */ 1150, /* 370 */ 1200, /* 371 */ 'NIET GEVONDEN', /* 372 */ 'NIET GEVONDEN', /* 373 */ 'NIET GEVONDEN', /* 374 */ 'NIET GEVONDEN', /* 375 */ 'NIET GEVONDEN', /* 376 */ 3000, /* 377 */ 5200, /* 378 */ 1950, /* 379 */ 4000, /* 380 */ 0, /* 381 */ 0, /* 382 */ 0, /* 383 */ 900, /* 384 */ 2150, /* 385 */ 3650, /* 386 */ 5100, /* 387 */ 0, /* 388 */ 400, /* 389 */ 900, /* 390 */ 800, /* 391 */ 1500, /* 392 */ 2600, /* 393 */ 4800, /* 394 */ 6800, /* 395 */ 9500, /* 396 */ 2600, /* 397 */ 1200, /* 398 */ 1750, /* 399 */ 1850, /* 400 */ 1850, /* 401 */ 2250, /* 402 */ 0, /* 403 */ 0, /* 404 */ 0, /* 405 */ 150, /* 406 */ 0, /* 407 */ 500, /* 408 */ 800, /* 409 */ 1500, /* 410 */ 2500, /* 411 */ 2650, /* 412 */ 4850, /* 413 */ 6700, /* 414 */ 800, /* 415 */ 1800, /* 416 */ 3000, /* 417 */ 1000, /* 418 */ 1150, /* 419 */ 1000, /* 420 */ 1200, /* 421 */ 2200, /* 422 */ 2200, /* 423 */ 4100, /* 424 */ 4500, /* 425 */ 850, /* 426 */ 1550, /* 427 */ 2500, /* 428 */ 4850, /* 429 */ 6850, /* 430 */ 0, /* 431 */ 950, /* 432 */ 1050, /* 433 */ 1200, /* 434 */ 3800, /* 435 */ 4000, /* 436 */ 900, /* 437 */ 1150, /* 438 */ 850, /* 439 */ 1100, /* 440 */ 950, /* 441 */ 1950, /* 442 */ 2300, /* 443 */ 750, /* 444 */ 1550, /* 445 */ 2500, /* 446 */ 2600, /* 447 */ 4900, /* 448 */ 0, /* 449 */ 0, /* 450 */ 0, /* 451 */ 400, /* 452 */ 350, /* 453 */ 300, /* 454 */ 320, /* 455 */ 300, /* 456 */ 800, /* 457 */ 1950, /* 458 */ 2750, /* 459 */ 600, /* 460 */ 1350, /* 461 */ 2950, /* 462 */ 1600, /* 463 */ 1600, /* 464 */ 550, /* 465 */ 950, /* 466 */ 1600, /* 467 */ 2750, /* 468 */ 4950, /* 469 */ 7000, /* 470 */ 700, /* 471 */ 1100, /* 472 */ 700, /* 473 */ 1100, /* 474 */ 5000, /* 475 */ 5250, /* 476 */ 0, /* 477 */ 300, /* 478 */ 170, /* 479 */ 170, /* 480 */ 850, /* 481 */ 1750, /* 482 */ 3000, /* 483 */ 1150, /* 484 */ 3600, /* 485 */ 4000, /* 486 */ 800, /* 487 */ 800, /* 488 */ 800, /* 489 */ 800, /* 490 */ 1650, /* 491 */ 1650, /* 492 */ 2000, /* 493 */ 1650, /* 494 */ 1400, /* 495 */ 1400, /* 496 */ 900, /* 497 */ 1200, /* 498 */ 550, /* 499 */ 450, /* 500 */ 1200, /* 501 */ 900, /* 502 */ 2000, /* 503 */ 2250, /* 504 */ 900, /* 505 */ 1600, /* 506 */ 2800, /* 507 */ 2950, /* 508 */ 5000, /* 509 */ 7200, /* 510 */ 600, /* 511 */ 1850, /* 512 */ 700, /* 513 */ 1900, /* 514 */ 1750, /* 515 */ 1850, /* 516 */ 3000, /* 517 */ 3100, /* 518 */ 3300, /* 519 */ 4750, /* 520 */ 0, /* 521 */ 0, /* 522 */ 0, /* 523 */ 0, /* 524 */ 0, /* 525 */ 'NIET GEVONDEN', /* 526 */ 'NIET GEVONDEN', /* 527 */ 'NIET GEVONDEN', /* 528 */ 'NIET GEVONDEN', /* 529 */ 'NIET GEVONDEN', /* 530 */ 'NIET GEVONDEN', /* 531 */ 'NIET GEVONDEN', /* 532 */ 'NIET GEVONDEN', /* 533 */ 'NIET GEVONDEN', /* 534 */ 'NIET GEVONDEN', /* 535 */ 'NIET GEVONDEN', /* 536 */ 'NIET GEVONDEN', /* 537 */ 'NIET GEVONDEN', /* 538 */ 'NIET GEVONDEN', /* 539 */ 'NIET GEVONDEN', /* 540 */ 'NIET GEVONDEN', /* 541 */ 'NIET GEVONDEN', /* 542 */ 'NIET GEVONDEN', /* 543 */ 'NIET GEVONDEN', /* 544 */ 'NIET GEVONDEN', /* 545 */ 'NIET GEVONDEN', /* 546 */ 'NIET GEVONDEN', /* 547 */ 'NIET GEVONDEN', /* 548 */ 4200, /* 549 */ 4200, /* 550 */ 850, /* 551 */ 1600, /* 552 */ 2200, /* 553 */ 500, /* 554 */ 3800, /* 555 */ 0, /* 556 */ 3200, /* 557 */ 6400, /* 558 */ 10714, /* 559 */ 200, /* 560 */ 400, /* 561 */ 400, /* 562 */ 'NIET GEVONDEN', /* 563 */ 'NIET GEVONDEN', /* 564 */ 2040, /* 565 */ 2140, /* 566 */ 1540, /* 567 */ 400, /* 568 */ 1200, /* 569 */ 2500, /* 570 */ 2000, /* 571 */ 0, /* 572 */ 0, /* 573 */ 370, /* 574 */ 300, /* 575 */ 500, /* 576 */ 510, /* 577 */ 1010, /* 578 */ 'NIET GEVONDEN', /* 579 */ 'NIET GEVONDEN', /* 580 */ 'NIET GEVONDEN', /* 581 */ 'NIET GEVONDEN', /* 582 */ 'NIET GEVONDEN', /* 583 */ 'NIET GEVONDEN', /* 584 */ 'NIET GEVONDEN', /* 585 */ 'NIET GEVONDEN', /* 586 */ 'NIET GEVONDEN', /* 587 */ 'NIET GEVONDEN', /* 588 */ 'NIET GEVONDEN', /* 589 */ 1980, /* 590 */ 8640, /* 591 */ 9450, /* 592 */ 11060, /* 593 */ 4000, /* 594 */ 6500, /* 595 */ 0, /* 596 */ 0, /* 597 */ 170, /* 598 */ 1360, /* 599 */ 500, /* 600 */ 500, /* 601 */ 500, /* 602 */ 510, /* 603 */ 'NIET GEVONDEN', /* 604 */ 'NIET GEVONDEN', /* 605 */ 'NIET GEVONDEN', /* 606 */ 'NIET GEVONDEN', /* 607 */ 'NIET GEVONDEN', /* 608 */ 'NIET GEVONDEN', /* 609 */ 'NIET GEVONDEN', /* 610 */ 'NIET GEVONDEN', /* 611 */ 'NIET GEVONDEN', /* 612 */ 'NIET GEVONDEN', /* 613 */ 'NIET GEVONDEN', /* 614 */ 'NIET GEVONDEN', /* 615 */ 'NIET GEVONDEN', /* 616 */ 'NIET GEVONDEN', /* 617 */ 'NIET GEVONDEN', /* 618 */ 'NIET GEVONDEN', /* 619 */ 'NIET GEVONDEN', /* 620 */ 'NIET GEVONDEN', /* 621 */ 'NIET GEVONDEN', /* 622 */ 'NIET GEVONDEN', /* 623 */ 'NIET GEVONDEN', /* 624 */ 'NIET GEVONDEN', /* 625 */ 'NIET GEVONDEN', /* 626 */ 'NIET GEVONDEN', /* 627 */ 'NIET GEVONDEN', /* 628 */ 'NIET GEVONDEN', /* 629 */ 'NIET GEVONDEN', /* 630 */ 'NIET GEVONDEN', /* 631 */ 'NIET GEVONDEN', /* 632 */ 'NIET GEVONDEN', /* 633 */ 'NIET GEVONDEN', /* 634 */ 'NIET GEVONDEN', /* 635 */ 'NIET GEVONDEN', /* 636 */ 'NIET GEVONDEN', /* 637 */ 'NIET GEVONDEN', /* 638 */ 'NIET GEVONDEN', /* 639 */ 'NIET GEVONDEN', /* 640 */ 'NIET GEVONDEN', /* 641 */ 'NIET GEVONDEN', /* 642 */ 'NIET GEVONDEN', /* 643 */ 'NIET GEVONDEN', /* 644 */ 'NIET GEVONDEN', /* 645 */ 'NIET GEVONDEN', /* 646 */ 'NIET GEVONDEN', /* 647 */ 'NIET GEVONDEN', /* 648 */ 'NIET GEVONDEN', /* 649 */ 'NIET GEVONDEN', /* 650 */ 'NIET GEVONDEN', /* 651 */ 'NIET GEVONDEN', /* 652 */ 'NIET GEVONDEN', /* 653 */ 'NIET GEVONDEN', /* 654 */ 'NIET GEVONDEN', /* 655 */ 'NIET GEVONDEN', /* 656 */ 'NIET GEVONDEN', /* 657 */ 'NIET GEVONDEN', /* 658 */ 'NIET GEVONDEN', /* 659 */ 'NIET GEVONDEN', /* 660 */ 'NIET GEVONDEN', /* 661 */ 'NIET GEVONDEN', /* 662 */ 'NIET GEVONDEN', /* 663 */ 'NIET GEVONDEN', /* 664 */ 'NIET GEVONDEN', /* 665 */ 'NIET GEVONDEN', /* 666 */ 'NIET GEVONDEN', /* 667 */ 'NIET GEVONDEN', /* 668 */ 'NIET GEVONDEN', /* 669 */ 'NIET GEVONDEN', /* 670 */ 'NIET GEVONDEN', /* 671 */ 'NIET GEVONDEN', /* 672 */ 'NIET GEVONDEN', /* 673 */ 'NIET GEVONDEN', /* 674 */ 'NIET GEVONDEN', /* 675 */ 'NIET GEVONDEN', /* 676 */ 'NIET GEVONDEN', /* 677 */ 'NIET GEVONDEN', /* 678 */ 'NIET GEVONDEN', /* 679 */ 'NIET GEVONDEN', /* 680 */ 'NIET GEVONDEN', /* 681 */ 'NIET GEVONDEN', /* 682 */ 'NIET GEVONDEN', /* 683 */ 'NIET GEVONDEN', /* 684 */ 'NIET GEVONDEN', /* 685 */ 'NIET GEVONDEN', /* 686 */ 'NIET GEVONDEN', /* 687 */ 'NIET GEVONDEN', /* 688 */ 'NIET GEVONDEN', /* 689 */ 'NIET GEVONDEN', /* 690 */ 'NIET GEVONDEN', /* 691 */ 'NIET GEVONDEN', /* 692 */ 'NIET GEVONDEN', /* 693 */ 'NIET GEVONDEN', /* 694 */ 'NIET GEVONDEN', /* 695 */ 'NIET GEVONDEN', /* 696 */ 'NIET GEVONDEN', /* 697 */ 'NIET GEVONDEN', /* 698 */ 'NIET GEVONDEN', /* 699 */ 'NIET GEVONDEN', /* 700 */ 'NIET GEVONDEN', /* 701 */ 'NIET GEVONDEN', /* 702 */ 'NIET GEVONDEN', /* 703 */ 'NIET GEVONDEN', /* 704 */ 'NIET GEVONDEN', /* 705 */ 'NIET GEVONDEN', /* 706 */ 'NIET GEVONDEN', /* 707 */ 'NIET GEVONDEN', /* 708 */ 'NIET GEVONDEN', /* 709 */ 'NIET GEVONDEN', /* 710 */ 'NIET GEVONDEN', /* 711 */ 'NIET GEVONDEN', /* 712 */ 'NIET GEVONDEN', /* 713 */ 'NIET GEVONDEN', /* 714 */ 'NIET GEVONDEN', /* 715 */ 'NIET GEVONDEN', /* 716 */ 'NIET GEVONDEN', /* 717 */ 'NIET GEVONDEN', /* 718 */ 'NIET GEVONDEN', /* 719 */ 'NIET GEVONDEN', /* 720 */ 'NIET GEVONDEN', /* 721 */ 'NIET GEVONDEN', /* 722 */ 'NIET GEVONDEN', /* 723 */ 'NIET GEVONDEN', /* 724 */ 'NIET GEVONDEN', /* 725 */ 'NIET GEVONDEN', /* 726 */ 'NIET GEVONDEN', /* 727 */ 'NIET GEVONDEN', /* 728 */ 'NIET GEVONDEN', /* 729 */ 'NIET GEVONDEN', /* 730 */ 'NIET GEVONDEN', /* 731 */ 'NIET GEVONDEN', /* 732 */ 'NIET GEVONDEN', /* 733 */ 'NIET GEVONDEN', /* 734 */ 'NIET GEVONDEN', /* 735 */ 'NIET GEVONDEN', /* 736 */ 'NIET GEVONDEN', /* 737 */ 'NIET GEVONDEN', /* 738 */ 'NIET GEVONDEN', /* 739 */ 'NIET GEVONDEN', /* 740 */ 'NIET GEVONDEN', /* 741 */ 'NIET GEVONDEN', /* 742 */ 'NIET GEVONDEN', /* 743 */ 'NIET GEVONDEN', /* 744 */ 'NIET GEVONDEN', /* 745 */ 'NIET GEVONDEN', /* 746 */ 'NIET GEVONDEN', /* 747 */ 'NIET GEVONDEN', /* 748 */ 'NIET GEVONDEN', /* 749 */ 'NIET GEVONDEN', /* 750 */ 'NIET GEVONDEN', /* 751 */ 'NIET GEVONDEN', /* 752 */ 'NIET GEVONDEN', /* 753 */ 'NIET GEVONDEN', /* 754 */ 'NIET GEVONDEN', /* 755 */ 'NIET GEVONDEN', /* 756 */ 'NIET GEVONDEN', /* 757 */ 'NIET GEVONDEN', /* 758 */ 'NIET GEVONDEN', /* 759 */ 'NIET GEVONDEN', /* 760 */ 'NIET GEVONDEN', /* 761 */ 'NIET GEVONDEN', /* 762 */ 'NIET GEVONDEN', /* 763 */ 'NIET GEVONDEN', /* 764 */ 'NIET GEVONDEN', /* 765 */ 'NIET GEVONDEN', /* 766 */ 'NIET GEVONDEN', /* 767 */ 'NIET GEVONDEN', /* 768 */ 'NIET GEVONDEN', /* 769 */ 'NIET GEVONDEN', /* 770 */ 'NIET GEVONDEN', /* 771 */ 'NIET GEVONDEN', /* 772 */ 'NIET GEVONDEN', /* 773 */ 'NIET GEVONDEN', /* 774 */ 'NIET GEVONDEN', /* 775 */ 'NIET GEVONDEN', /* 776 */ 'NIET GEVONDEN', /* 777 */ 'NIET GEVONDEN', /* 778 */ 'NIET GEVONDEN', /* 779 */ 'NIET GEVONDEN', /* 780 */ 'NIET GEVONDEN', /* 781 */ 'NIET GEVONDEN', /* 782 */ 'NIET GEVONDEN', /* 783 */ 'NIET GEVONDEN', /* 784 */ 'NIET GEVONDEN', /* 785 */ 'NIET GEVONDEN', /* 786 */ 'NIET GEVONDEN', /* 787 */ 'NIET GEVONDEN', /* 788 */ 'NIET GEVONDEN', /* 789 */ 'NIET GEVONDEN', /* 790 */ 'NIET GEVONDEN', /* 791 */ 'NIET GEVONDEN', /* 792 */ 'NIET GEVONDEN', /* 793 */ 'NIET GEVONDEN', /* 794 */ 'NIET GEVONDEN', /* 795 */ 'NIET GEVONDEN', /* 796 */ 'NIET GEVONDEN', /* 797 */ 'NIET GEVONDEN', /* 798 */ 'NIET GEVONDEN', /* 799 */ 'NIET GEVONDEN', /* 800 */ 'NIET GEVONDEN', /* 801 */ 'NIET GEVONDEN', /* 802 */ 'NIET GEVONDEN', /* 803 */ 'NIET GEVONDEN', /* 804 */ 'NIET GEVONDEN', /* 805 */ 'NIET GEVONDEN', /* 806 */ 'NIET GEVONDEN', /* 807 */ 'NIET GEVONDEN', /* 808 */ 'NIET GEVONDEN', /* 809 */ 'NIET GEVONDEN', /* 810 */ 'NIET GEVONDEN', /* 811 */ 'NIET GEVONDEN', /* 812 */ 'NIET GEVONDEN', /* 813 */ 'NIET GEVONDEN', /* 814 */ 'NIET GEVONDEN', /* 815 */ 'NIET GEVONDEN', /* 816 */ 'NIET GEVONDEN', /* 817 */ 'NIET GEVONDEN', /* 818 */ 'NIET GEVONDEN', /* 819 */ 'NIET GEVONDEN', /* 820 */ 'NIET GEVONDEN', /* 821 */ 'NIET GEVONDEN', /* 822 */ 'NIET GEVONDEN', /* 823 */ 'NIET GEVONDEN', /* 824 */ 'NIET GEVONDEN', /* 825 */ 'NIET GEVONDEN', /* 826 */ 'NIET GEVONDEN', /* 827 */ 'NIET GEVONDEN', /* 828 */ 'NIET GEVONDEN', /* 829 */ 'NIET GEVONDEN', /* 830 */ 'NIET GEVONDEN', /* 831 */ 'NIET GEVONDEN', /* 832 */ 'NIET GEVONDEN', /* 833 */ 'NIET GEVONDEN', /* 834 */ 'NIET GEVONDEN', /* 835 */ 'NIET GEVONDEN', /* 836 */ 'NIET GEVONDEN', /* 837 */ 'NIET GEVONDEN', /* 838 */ 'NIET GEVONDEN', /* 839 */ 'NIET GEVONDEN', /* 840 */ 'NIET GEVONDEN', /* 841 */ 'NIET GEVONDEN', /* 842 */ 'NIET GEVONDEN', /* 843 */ 'NIET GEVONDEN', /* 844 */ 'NIET GEVONDEN', /* 845 */ 'NIET GEVONDEN', /* 846 */ 'NIET GEVONDEN', /* 847 */ 'NIET GEVONDEN', /* 848 */ 'NIET GEVONDEN', /* 849 */ 'NIET GEVONDEN', /* 850 */ 'NIET GEVONDEN', /* 851 */ 'NIET GEVONDEN', /* 852 */ 'NIET GEVONDEN', /* 853 */ 'NIET GEVONDEN', /* 854 */ 'NIET GEVONDEN', /* 855 */ 'NIET GEVONDEN', /* 856 */ 'NIET GEVONDEN', /* 857 */ 'NIET GEVONDEN', /* 858 */ 'NIET GEVONDEN', /* 859 */ 'NIET GEVONDEN', /* 860 */ 'NIET GEVONDEN', /* 861 */ 'NIET GEVONDEN', /* 862 */ 'NIET GEVONDEN', /* 863 */ 'NIET GEVONDEN', /* 864 */ 'NIET GEVONDEN', /* 865 */ 'NIET GEVONDEN', /* 866 */ 'NIET GEVONDEN', /* 867 */ 'NIET GEVONDEN', /* 868 */ 'NIET GEVONDEN', /* 869 */ 'NIET GEVONDEN', /* 870 */ 'NIET GEVONDEN', /* 871 */ 'NIET GEVONDEN', /* 872 */ 'NIET GEVONDEN', /* 873 */ 'NIET GEVONDEN', /* 874 */ 'NIET GEVONDEN', /* 875 */ 'NIET GEVONDEN', /* 876 */ 'NIET GEVONDEN', /* 877 */ 'NIET GEVONDEN', /* 878 */ 'NIET GEVONDEN', /* 879 */ 'NIET GEVONDEN', /* 880 */ 'NIET GEVONDEN', /* 881 */ 'NIET GEVONDEN', /* 882 */ 'NIET GEVONDEN', /* 883 */ 'NIET GEVONDEN', /* 884 */ 'NIET GEVONDEN', /* 885 */ 'NIET GEVONDEN', /* 886 */ 'NIET GEVONDEN', /* 887 */ 'NIET GEVONDEN', /* 888 */ 'NIET GEVONDEN', /* 889 */ 'NIET GEVONDEN', /* 890 */ 'NIET GEVONDEN', /* 891 */ 'NIET GEVONDEN', /* 892 */ 'NIET GEVONDEN', /* 893 */ 'NIET GEVONDEN', /* 894 */ 'NIET GEVONDEN', /* 895 */ 'NIET GEVONDEN', /* 896 */ 'NIET GEVONDEN', /* 897 */ 'NIET GEVONDEN', /* 898 */ 'NIET GEVONDEN', /* 899 */ 'NIET GEVONDEN', /* 900 */ 'NIET GEVONDEN', /* 901 */ 'NIET GEVONDEN', /* 902 */ 'NIET GEVONDEN', /* 903 */ 'NIET GEVONDEN', /* 904 */ 'NIET GEVONDEN', /* 905 */ 'NIET GEVONDEN', /* 906 */ 'NIET GEVONDEN', /* 907 */ 'NIET GEVONDEN', /* 908 */ 'NIET GEVONDEN', /* 909 */ 'NIET GEVONDEN', /* 910 */ 'NIET GEVONDEN', /* 911 */ 'NIET GEVONDEN', /* 912 */ 'NIET GEVONDEN', /* 913 */ 'NIET GEVONDEN', /* 914 */ 'NIET GEVONDEN', /* 915 */ 'NIET GEVONDEN', /* 916 */ 'NIET GEVONDEN', /* 917 */ 'NIET GEVONDEN', /* 918 */ 'NIET GEVONDEN'
                  ];

    // initial call of adding info
    initial_setup();

    // extend missionMarkerAdd -----------------------------------------------------------------------
    var original_func = missionMarkerAdd;

    // this function is always called, when a new mission is added
   missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);

        update(e);
    }

    // this function shows the credits information at initial loading of the page
    function update(e)
    {
        var Missions = $('.missionSideBarEntry');
        var added = false;

        for (var i = 0; i < Missions.length; i++)
        {
            var childs = Missions[i].firstElementChild.firstElementChild.children;
            var existing = false;

            if (e.id != Missions[i].getAttribute('mission_id')) continue;

            // check if html element is actually existing
            for (var ic = 0; ic < childs.length; ic++)
            {
                if(childs[ic].className == 'missionCredits')
                {
                   existing = true;
                   break;
                }
            }

            // if it's existing but mtid is filled, we re create the element
            if(existing == true && e.mtid != undefined)
            {
                for(var ic2 = 0; ic2 < childs.length; ic2++)
                {
                    if(childs[ic2].className != 'missionCredits') continue;

                    var child = childs[ic2];
                    Missions[i].firstElementChild.firstElementChild.removeChild(child);
                    if (get_credits_for_type(e.mtid) == 0) child.innerHTML = 'Alleen Ambulance'
                    else child.innerHTML = 'Gem. ' + get_credits_for_type(e.mtid) + ' Credits';
                    Missions[i].firstElementChild.firstElementChild.appendChild(child);
                }
            }
            else //create element
            {
                var mission_type_id = Missions[i].getAttribute('mission_type_id');

                if(mission_type_id == 'null') continue;

                var div_elem = document.createElement('div');
                var html_str = '';

                if (get_credits_for_type(Missions[i].getAttribute('mission_type_id')) == 0) html_str = 'Alleen Ambulance';
                else html_str = 'Gem. ' + get_credits_for_type(Missions[i].getAttribute('mission_type_id')) + ' Credits';

                div_elem.innerHTML = html_str;
                div_elem.setAttribute("class", "missionCredits");
                div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));
                Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
            }
        }
    }

    function initial_setup()
    {
        // clear all
        $('.missionCredits').remove();

        // get complete mission list
        var Missions = $('.missionSideBarEntry');

        // add info to every mission
        for (var i = 0; i < Missions.length; i++)
        {
            var mission_type_id = Missions[i].getAttribute('mission_type_id');

            if (mission_type_id == 'null') continue;

            // init credits
            var credits = 0;

            // init html string
            var html_str = '';

            // get credits for mission type
            credits = get_credits_for_type(Missions[i].getAttribute('mission_type_id'));

            // create div element
            if (credits == 0) html_str = 'Alleen Ambulance';
            else html_str = 'Gem. ' + credits + ' Credits';

            var div_elem = document.createElement('div');
            div_elem.innerHTML = html_str;
            div_elem.setAttribute("class", "missionCredits");
            div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));

            // add div element
            Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
        }
    }

    // returns the credits for a specific mission type
    function get_credits_for_type(type)
    {
        return aCredits[type];
    }

})();
