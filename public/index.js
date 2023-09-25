/**
 * CBN Technologies Website (c) by Nguyễn Tri Phương
 *
 * CBN Technologies Website is licensed under a
 * Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-sa/4.0/>.
 *
 */
const offset = () => {
    width = $(".decorations .stats").height();
    $(".decorations .offset").css("transform", "translateY(-" + width + "px)");
    $(".decorative-text").css("margin-top", "-" + $(".decorations #waves").height() / 2 + "px");

    height2 = $("#shiftedjoin").height();
    $("#plsjoinbg").css("transform", "translateY(-" + height2 * -10000 / 100 + "px)");
}


$(offset);
$(window).on('resize', offset);
