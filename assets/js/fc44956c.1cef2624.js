"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75969],{24652:function(n){n.exports=JSON.parse('{"functions":[{"name":"choice","desc":"Picks an option from a list. Returns nil if the list is empty.\\n\\n```lua\\nlocal options = Players:GetPlayers()\\nlocal choice = RandomUtils.choice(options)\\nprint(choice)\\n```\\n\\nDeterministic version:\\n```lua\\nlocal options = { \\"apples\\", \\"oranges\\", \\"bananas\\" }\\nlocal random = Random.new()\\n\\nprint(RandomUtils.choice(options, random)) --\x3e \\"apples\\"\\n```","params":[{"name":"list","desc":"","lua_type":"{ T }"},{"name":"random","desc":"Optional","lua_type":"Random?"}],"returns":[{"desc":"","lua_type":"T?"}],"function_type":"static","source":{"line":37,"path":"src/randomutils/src/Shared/RandomUtils.lua"}},{"name":"shuffledCopy","desc":"Creates a copy of the table, but shuffled using fisher-yates shuffle\\n\\n```lua\\nlocal options = { \\"apples\\", \\"oranges\\", \\"bananas\\" }\\nlocal random = Random.new()\\n\\nprint(RandomUtils.shuffledCopy(options)) --\x3e shuffled copy of table\\nprint(RandomUtils.shuffledCopy(options, random)) --\x3e deterministic shuffled copy of table\\n```","params":[{"name":"list","desc":"A new table to copy","lua_type":"{ T }"},{"name":"random","desc":"Optional random to use when shuffling","lua_type":"Random?"}],"returns":[{"desc":"","lua_type":"{ T }"}],"function_type":"static","source":{"line":66,"path":"src/randomutils/src/Shared/RandomUtils.lua"}},{"name":"shuffle","desc":"Shuffles the list in place using fisher-yates shuffle.\\n\\n```lua\\nlocal options = { \\"apples\\", \\"oranges\\", \\"bananas\\" }\\nlocal random = Random.new()\\n\\nRandomUtils.shuffle(options, random)\\nprint(options) --\x3e deterministic shuffled copy of table\\n\\nRandomUtils.shuffle(options)\\nprint(options) --\x3e shuffled table\\n```","params":[{"name":"list","desc":"","lua_type":"{T}"},{"name":"random","desc":"Optional random to use when shuffling","lua_type":"Random?"}],"returns":[],"function_type":"static","source":{"line":94,"path":"src/randomutils/src/Shared/RandomUtils.lua"}},{"name":"weightedChoice","desc":"Like [RandomUtils.choice] but weighted options in a\\nperformance friendly way. Takes O(n) time.\\n\\n:::warning\\nA weight of 0 may still be picked, and negative weights may result in\\nundefined behavior.\\n:::\\n\\n```lua\\nlocal weights = { 1, 3, 10 }\\nlocal options = { \\"a\\", \\"b\\", \\"c\\" }\\n\\nprint(RandomUtils.weightedChoice(options, weights)) --\x3e \\"c\\"\\n```","params":[{"name":"list","desc":"List of options","lua_type":"{ T }"},{"name":"weights","desc":"Array the same length with weights.","lua_type":"{ number }"},{"name":"random","desc":"Optional random","lua_type":"Random?"}],"returns":[{"desc":"May return nil if the list is empty","lua_type":"T?"}],"function_type":"static","source":{"line":129,"path":"src/randomutils/src/Shared/RandomUtils.lua"}},{"name":"gaussianRandom","desc":"Computes the gaussian random function which is the independent probability curve.","params":[{"name":"random","desc":"Optional random to use","lua_type":"Random?"}],"returns":[{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":170,"path":"src/randomutils/src/Shared/RandomUtils.lua"}},{"name":"randomUnitVector3","desc":"","params":[{"name":"random?","desc":"Optional random to use","lua_type":"Random?"}],"returns":[{"desc":"","lua_type":"Vector3"}],"function_type":"static","source":{"line":187,"path":"src/randomutils/src/Shared/RandomUtils.lua"}}],"properties":[],"types":[],"name":"RandomUtils","desc":"Utility functions involving random variables. This is quite useful\\nfor a variety of game mechanics.\\n\\n:::tip\\nEach method generally takes a random object in as the last argument,\\nwhich can be used to seed the randomness. This is especially useful for\\nreproducting state in testing.\\n:::","source":{"line":13,"path":"src/randomutils/src/Shared/RandomUtils.lua"}}')}}]);