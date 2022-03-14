"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35666],{42842:function(e){e.exports=JSON.parse('{"functions":[{"name":"spanSearch","desc":"```\\nif t lands within the domain of two spans of time\\n\\tt = 5\\n\\t[3   5][5   7]\\n\\t          ^ picks this one\\n```","params":[{"name":"list","desc":"","lua_type":"{T}"},{"name":"t","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number"},{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":21,"path":"src/binarysearch/src/Shared/BinarySearchUtils.lua"}},{"name":"spanSearchNodes","desc":"Same as searching a span, but uses a list of nodes","params":[{"name":"list","desc":"","lua_type":"{ TNode }"},{"name":"index","desc":"","lua_type":"string"},{"name":"t","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number"},{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":57,"path":"src/binarysearch/src/Shared/BinarySearchUtils.lua"}},{"name":"spanSearchAnything","desc":"Same as span search, but uses an indexFunc to retrieve the index","params":[{"name":"n","desc":"","lua_type":"number"},{"name":"indexFunc","desc":"","lua_type":"(number) -> number"},{"name":"t","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number"},{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":92,"path":"src/binarysearch/src/Shared/BinarySearchUtils.lua"}}],"properties":[],"types":[],"name":"BinarySearchUtils","desc":"Binary search implementation for Roblox in pure Lua","source":{"line":5,"path":"src/binarysearch/src/Shared/BinarySearchUtils.lua"}}')}}]);