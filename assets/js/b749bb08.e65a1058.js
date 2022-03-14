"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79243],{69890:function(e){e.exports=JSON.parse('{"functions":[{"name":"playFromId","desc":"Plays back a template given asset id.\\n\\n```lua\\nSoundUtils.playFromId(\\"rbxassetid://4255432837\\") -- Plays a wooshing sound\\n```\\n\\n:::tip\\nThe sound will be automatically cleaned up after the sound is played.\\n:::","params":[{"name":"id","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Sound"}],"function_type":"static","source":{"line":30,"path":"src/sounds/src/Shared/SoundUtils.lua"}},{"name":"playTemplate","desc":"Plays back a template given the templateName.\\n\\n:::tip\\nThe sound will be automatically cleaned up after the sound is played.\\n:::","params":[{"name":"templates","desc":"","lua_type":"TemplateProvider"},{"name":"templateName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Sound"}],"function_type":"static","source":{"line":64,"path":"src/sounds/src/Shared/SoundUtils.lua"}},{"name":"toRbxAssetId","desc":"Converts a string or number to a string for playback.","params":[{"name":"id","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"static","source":{"line":85,"path":"src/sounds/src/Shared/SoundUtils.lua"}},{"name":"playTemplateInParent","desc":"Plays back a sound template in a specific parent.\\n\\n:::tip\\nThe sound will be automatically cleaned up after the sound is played.\\n:::","params":[{"name":"templates","desc":"","lua_type":"TemplateProvider"},{"name":"templateName","desc":"","lua_type":"string"},{"name":"parent","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Sound"}],"function_type":"static","source":{"line":105,"path":"src/sounds/src/Shared/SoundUtils.lua"}}],"properties":[],"types":[],"name":"SoundUtils","desc":"Helps plays back sounds in the Roblox engine.\\n\\n```lua\\nSoundUtils.playFromId(\\"rbxassetid://4255432837\\") -- Plays a wooshing sound\\n```","source":{"line":10,"path":"src/sounds/src/Shared/SoundUtils.lua"}}')}}]);