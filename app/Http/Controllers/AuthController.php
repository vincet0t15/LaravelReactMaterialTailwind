<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);


        if (
            Auth::attempt([
                'username' => $request->username,
                'password' => $request->password,
            ])
        ) {
            $user = User::where('username', $request->username)
                ->first();

            return response()->json(
                [
                    'status' => 'success',
                    'message' => 'User Logged In Successfully',
                    'token' => $user->createToken('API TOKEN')->plainTextToken,
                    'user' => auth()->user()
                ],
                200
            );
        } else {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Login Error',
                ],
                401
            );
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'username' => 'required|unique:users',
            'password' => ['required', 'min:6', 'confirmed'],
            'password_confirmation' => ['required'],
        ]);

        User::create([
            'name' => $request->name,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'event_id' => 0,
        ]);

        return response()->json(
            [
                'status' => 'success',
                'message' => 'Successfully register'
            ],
            200
        );
    }

    public function logout(Request $request)
    {
        return $request->all();
        $request->user()->currentAccessToken()->delete();

        return response(['message' => 'Successfully Logging out']);
    }
}
