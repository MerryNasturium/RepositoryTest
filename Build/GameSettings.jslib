//ゲーム開始時コールバック
function CallBackStart(UnityMessage)
{
	var callback_start =function() 
	{
	    UnityMessage;
	}
	console.log("ONON");
	game_start(callback_start);
}

//ゲーム終了時コールバック
function CallBackEnd(UnityMessage,game_score)
{
	var callback_end = function()
	{
		UnityMessage;
	}
	console.log(game_score);
	game_end({callback: callback_end, score: game_score});
}

//ゲームリワード広告視聴完了
function CallBackShowReward(UnityMessage)
{
	var reward_success_callback = function()
	{
		UnityMessage;
	}
	show_reward_ad(reward_success_callback);
}

//ゲームリワード広告視聴不完了
function CallBackFailShowReward(UnityMessage)
{
	var reward_fail_callback = function()
	{
		UnityMessage;
	}
	show_reward_ad({reward_fail_callback:'fail_func'});
}

//データ保存
function CallBackSave(data)
{
	var callback_save =function( )
	{
		console.log(data);	
	}
	game_save({callback: callback_save, data: data});	
}
//データ取得
function CallBackDataGet()
{
	var callback_getdata = function(data){
	};
 	game_get_data({callback: callback_getdata});
}