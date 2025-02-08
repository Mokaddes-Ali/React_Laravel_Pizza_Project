<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'size',
        'crust',
        'toppings',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
