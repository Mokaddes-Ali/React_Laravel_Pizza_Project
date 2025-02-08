<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;

    protected $appends = [
        'last_updated',
    ];

    protected $fillable = [
        'user_id',
        'order_id',
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

    public function getLastUpdatedAttribute(): string
    {
        return $this->updated_at->diffForHumans();
    }
}

