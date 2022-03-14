"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46960],{63417:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new AccelTween.\\n\\n```lua\\nlocal accelTween = AccelTween.new(30)\\naccelTween.t = 1\\n\\nconn = RunService.RenderStepped:Connect(function()\\n\\tprint(accelTween.p)\\nend)\\ntask.delay(accelTween.rtime, function()\\n\\tconn:Disconnect()\\nend)\\n```","params":[{"name":"maxaccel","desc":"The maximum acceleration applied to reach its target. Defaults to 1","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"AccelTween"}],"function_type":"static","source":{"line":30,"path":"src/acceltween/src/Shared/AccelTween.lua"}}],"properties":[{"name":"p","desc":"Gets and sets the current position of the AccelTween","lua_type":"number","source":{"line":49,"path":"src/acceltween/src/Shared/AccelTween.lua"}},{"name":"v","desc":"Gets and sets the current velocity of the AccelTween","lua_type":"number","source":{"line":55,"path":"src/acceltween/src/Shared/AccelTween.lua"}},{"name":"a","desc":"Gets and sets the maximum acceleration.","lua_type":"number","source":{"line":61,"path":"src/acceltween/src/Shared/AccelTween.lua"}},{"name":"t","desc":"Gets and sets the target position.","lua_type":"number","source":{"line":67,"path":"src/acceltween/src/Shared/AccelTween.lua"}},{"name":"rtime","desc":"Returns the remaining time before the AccelTween attains the target.","lua_type":"number","readonly":true,"source":{"line":74,"path":"src/acceltween/src/Shared/AccelTween.lua"}},{"name":"pt","desc":"Sets the current and target position, and sets the velocity to 0.","lua_type":"number","source":{"line":80,"path":"src/acceltween/src/Shared/AccelTween.lua"}}],"types":[],"name":"AccelTween","desc":"Provides a means to, with both a continuous position and velocity,\\naccelerate from its current position to a target position in minimum time\\ngiven a maximum acceleration. See [Spring] for another version of this.\\n\\nAuthor: TreyReynolds/AxisAngles","source":{"line":9,"path":"src/acceltween/src/Shared/AccelTween.lua"}}')}}]);