var battlemechCreatorControllerExportsArray =
	[
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		function ($rootScope, $translate, $scope, $location) {
			// Set Page Title Tag
			$translate(['APP_TITLE', 'BM_EXPORTS_TITLE', 'BM_EXPORTS_DESC', 'WELCOME_BUTTON_MECH_CREATOR' ]).then(function (translation) {
				$rootScope.title_tag = translation.BM_EXPORTS_TITLE + " | " + translation.APP_TITLE;
				if( translation.BM_EXPORTS_DESC )
					$scope.h3_title = translation.BM_EXPORTS_TITLE + ": " + translation.BM_EXPORTS_DESC;
				else
					$scope.h3_title = translation.BM_EXPORTS_TITLE;
				$rootScope.subtitle_tag = "&raquo; " + translation.WELCOME_BUTTON_MECH_CREATOR;
			});

			$scope.goHome = function() {

				delete(localStorage["backToPath"]);
				$location.url("/");
			}

			localStorage["backToPath"] = $location.$$path;

			// create mech object, load from localStorage if exists
			current_mech = new Mech();

			if( localStorage["tmp.current_mech"] )
				current_mech.importJSON( localStorage["tmp.current_mech"] );
			else
				current_mech.uuid = generateUUID();

			current_mech.useLang = localStorage["tmp.preferred_language"];


			$scope.makeTROBBCode = current_mech.makeTROBBCode();

			// make tro for sidebar
			$scope.mech_tro = current_mech.makeTROHTML();
			$scope.mech_bv_calc = current_mech.getBVCalcHTML();
			$scope.mech_as_calc = current_mech.getASCalcHTML();

			$scope.makeRecordSheet = function() {
				// convertImgToDataURLviaCanvas(
				// 	'./images/pdf/blank-mech-sheet-smaller.png',
				// 	function(base64Img) {
				pdf = makeBattlemechRecordSheetPDF(current_mech);
				//~ if( !ifIEOrEdge() )
					//~ pdf.output('dataurlnewwindow');
				//~ else
					pdf.save(current_mech.getName() + ' - Record Sheet.pdf');
					// }
				 // );
			}

			$scope.makeTROSheet = function() {
				pdf = makeBattlemechTROPDF(current_mech);
				//~ if( !ifIEOrEdge() )
					//~ pdf.output('dataurlnewwindow');
				//~ else
					pdf.save(current_mech.getName() + ' - TRO.pdf');
			}
			$scope.makeCombinedSheet = function() {
				// convertFileToDataURLviaFileReader(
				// 	'./images/pdf/blank-mech-sheet.png',
				// 	function(base64Img) {
						pdf = makeBattlemechCombinedPDF(current_mech);
						pdf.save(current_mech.getName() + ' - Record Sheet and TRO.pdf');
				// 		pdf.output('dataurlnewwindow');
				// 	}
				// );
			}
		}
	]
;

angular.module("webApp").controller(
	"battlemechCreatorControllerExports",
	battlemechCreatorControllerExportsArray
);

angular.module("cordovaApp").controller(
	"battlemechCreatorControllerExports",
	battlemechCreatorControllerExportsArray
);
